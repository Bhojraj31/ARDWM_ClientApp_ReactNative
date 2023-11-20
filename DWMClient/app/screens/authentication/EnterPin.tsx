/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Enter Pin
 * @Type:- Functional Component
 * @Role:- for showing Enter Pin
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-9
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  09-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState, useRef, useEffect} from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CustomBtn from '../../components/CustomBtn';
import { useLoginMutation } from '../../services/AddLeadCommonService';
import { apiResStatus, apiType, apiTypes } from '../../assets/constants/ApiConstants';
import { useToast } from 'react-native-toast-notifications';
import { store } from '../../store';

const EnterPin: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // UseState For set pins
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

  const inputRefs = useRef<(TextInput | null)[]>([null, null, null, null]);

  const [loginPayload, loginRes] = useLoginMutation();

  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // Empty Enter Pin Fields when user come back on the screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset PIN values to an empty array when the component is focused
      setPin(['', '', '', '']);
    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [navigation]);

  const handlePinChange = (index: number, value: string) => {
    if (value === 'Backspace' || value === 'Delete') {
      // for remove current input
      if (index > 0) {
        if (pin[index] === '' && pin[index - 1] !== '') {
          const newPin = [...pin];
          newPin[index - 1] = '';
          setPin(newPin);
          inputRefs.current[index - 1]?.focus();
        } else if (pin[index] !== '') {
          const newPin = [...pin];
          newPin[index] = '';
          setPin(newPin);
        }
      } else if (index === 0 && pin[index] !== '') {
        const newPin = [...pin];
        newPin[index] = '';
        setPin(newPin);
      }
    } else if (value.length === 1 && index < pin.length) {
      // Handle regular digit input
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      console.log(newPin);
      // target to next input field if available
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Check if all pins are entered (4 digits)
      if (index === 3 && newPin.every(digit => digit !== '')) {
        // Navigate to the Dashboard screen
        console.log('go to Dashboard', newPin);
        // let pinStr = pin.toString()
        // console.log(pinStr);
        callLoginApi(newPin)

        navigation.navigate('Dashboard');
      }
    }
  };

  const callLoginApi = async (pin: string[]) => {

    let countryCode = store.getState().onBoarding.data.selectedCountryCode
    let mobNo = store.getState().onBoarding.data.mobNo
    let pinStr = pin.toString()
    let pinWithoutCommas = pinStr.replace(/,/g, '');
    console.log(pinWithoutCommas);

    const loginReq = {
      countryCode: countryCode,
      deviceToken: '0ADBB91FB98D4847A80F3BCDCB2DE579',
      userName: mobNo,
      pin: pinWithoutCommas,
      version: '1.0',
      isRm: '0',
    };
    console.log(loginReq);

    try {
      apiType.value = apiTypes.post;
      const res = await loginPayload(loginReq).unwrap();

      // Login Api Response
      if (res.status.toLowerCase() === apiResStatus.SUCCESS) {
        toast.show(res.reasonCode);
        console.log('login api succuss');
      } else if (res.status.toLowerCase() === apiResStatus.FAIL) {
        toast.show(res.reasonCode);
        console.log('login api fail');
      } else {
        console.log('login Api Error');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: background,
      }}>
      <Image
        source={require('../../assets/images/ARLogo_W.png')}
        style={{ width: 250, height: 90, tintColor: 'white' }}
      />

      {/* Input Box */}
      <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: '20%' }}>
        {pin.map((digit, index) => (
          <TextInput
            secureTextEntry={true}
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            placeholder=""
            style={styles.inputField}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handlePinChange(index, text)}
            onKeyPress={e => {
              if (
                e.nativeEvent.key === 'Backspace' ||
                e.nativeEvent.key === 'Delete'
              ) {
                handlePinChange(index, e.nativeEvent.key);
              }
            }}
          />
        ))}
      </View>

      {/* Text */}
      <Text style={{ fontSize: 20, color: 'grey', marginBottom: 15 }}>
        Enter your 4-Digit PIN
      </Text>

      {/* Btn */}
      <CustomBtn
        textColor={deepskyblue}
        btnLabel="Forgot PIN?"
        Press={() => {
          navigation.navigate('ForgetPin');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: 50,
    height: 50,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    margin: 7,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

export default EnterPin;
