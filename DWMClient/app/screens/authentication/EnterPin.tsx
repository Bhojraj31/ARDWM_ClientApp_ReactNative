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

import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import CustomBtn from '../../components/CustomBtn';

const EnterPin: React.FC = () => {

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // UseState For set pins
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

  const inputRefs = useRef<(TextInput | null)[]>([null, null, null, null]);

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

      // target to next input field if available
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Check if all pins are entered (4 digits)
      if (index === 3 && newPin.every((digit) => digit !== '')) {
        // Navigate to the Dashboard screen
        navigation.navigate('Dashboard');
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: background }}>
      {/* for space */}
      {/* <View style={{ flex: .30 }}></View> */}

      {/* <View style={{  alignItems: 'center',}}> */}
        {/* <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}> */}
        <Image source={require('../../assets/images/ARLogo_W.png')} style={{ width: 250, height: 90, tintColor: 'white' }} />

        {/* Input Box */}
        <View style={{ flexDirection: 'row', marginBottom: 10, marginTop:'20%' }}>
          {pin.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              placeholder=""
              style={styles.inputField}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handlePinChange(index, text)}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === 'Backspace' || e.nativeEvent.key === 'Delete') {
                  handlePinChange(index, e.nativeEvent.key);
                }
              }}
            />
          ))}
        </View>

        {/* Text */}
        <Text style={{ fontSize: 20, color: 'grey', marginBottom: 15 }}>
          Enter 4-Digit PIN
        </Text>

        {/* Btn */}
        <CustomBtn
          textColor={deepskyblue}
          btnLabel="Forgot PIN?"
          Press={() => {
            navigation.navigate('ForgetPin')
          }}
        />
      </View>
    // </View>

    // </View>
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
