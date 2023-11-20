/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Forget Pin
 * @Type:- Functional Component
 * @Role:- for showing Forget Pin
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-10
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  12-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import {
  StyleSheet,
  Text,
  View,
  Modal,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomInputField from '../../components/CustomInputField';
import {background, deepskyblue} from '../../assets/constants/ColorConstants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  apiErrorType,
  apiResStatus,
  apiType,
  apiTypes,
} from '../../assets/constants/ApiConstants';
import {useForgetPinMutation} from '../../services/ForgetPinService';
import CustomBtn from '../../components/CustomBtn';
import CountryListDropDown from '../../components/CountryListDropDown';
import {store} from '../../store';
import { useToast } from "react-native-toast-notifications";

const ForgetPin = () => {
  const toast = useToast();
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  const [number, setNumber] = useState('');
  const [validationError, setValidationError] = useState('');
  const [forgetPinApiRequest, forgetPinApiResponse] = useForgetPinMutation();

  const [countryId, setCountryId] = useState('645095');
  const [countryCode, setCountryCode] = useState('91');
  const [isCodeClick, setIsCodeClick] = useState(false);

  var countryData: {country: string; code: string; id: string}[] = [];

  const handleNumberChange = (text: string) => {
    const validationRegex = /^[0-9]*$/;
    if (countryCode === '91' && text.length <= 10) {
      console.log(validationRegex.test(text));

      if (validationRegex.test(text) && text.length <= 10) {
        setNumber(text);
        setValidationError('');
      } else {
        setValidationError('Please enter valid mobile number');
      }
    } else if (countryCode !== '91') {
      setNumber(text);
      if (validationRegex.test(text) && text.length <= 14 && text.length >= 4) {
        setValidationError('');
      } else {
        setValidationError('Please enter valid mobile number');
      }
    }
  };

  const handleContinue = async () => {
    if (validationError === '' && validateMobNo()) {
        let countryCode = store.getState().onBoarding.data.selectedCountryCode
        console.log(number, countryCode);
        
      try {
        apiType.value = apiTypes.get;
        const res = await forgetPinApiRequest({mobile: number, countryCode}).unwrap();
        
        if (res.status.toLowerCase() === apiResStatus.SUCCESS) {
          toast.show("An SMS with the new PIN has been sent on your registered mobile number and email address.")
          // navigate to next screen
          navigation.goBack();
        } else {
          // console.log('ForgetPin fail Response', res);
          toast.show(res.reasonCode)
        }
      } catch (error) {
        toast.show(apiErrorType.APP_MESSAGE)
      }
    } else {
      setValidationError('Please enter valid mobile number');
    }
  };

  const validateMobNo = () => {
    var isTrue = false;
    let mobNo = store.getState().onBoarding.data.mobNo;

    if (countryCode === '91' && number.length === 10) {
      if (mobNo !== number) {
        setValidationError('please enter your registered mobile number');
      } else {
        isTrue = true;
      }
    } else if (
      countryCode !== '91' &&
      number.length > 3 &&
      number.length < 15
    ) {
      if (mobNo !== number) {
        setValidationError('please enter your registered mobile number');
      } else {
        isTrue = true;
      }
    }
    
    return isTrue;
  };

  const openModal = () => {
    setIsCodeClick(!isCodeClick);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: background}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        {/* Tittle */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: 'grey', textAlign: 'center'}}>
            Please enter your registered mobile number
          </Text>
          {/* <Text style={{ fontSize: 18, color: 'grey' }}>
                        mobile number
                    </Text> */}
        </View>

        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={openModal}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                }}>{`+${countryCode}`}</Text>
            </TouchableOpacity>
          </View>

          {/* Country Drop Down */}
          {isCodeClick ? (
            <Modal transparent={true}>
              <CountryListDropDown
                sourceData={countryData}
                selectId={item => setCountryId(item)}
                selectedCode={item => {
                  setCountryCode(item);
                  setNumber('');
                }}
                setShow={val => setIsCodeClick(val)}
              />
            </Modal>
          ) : null}

          <View
            style={{
              borderRightWidth: 1,
              borderColor: 'grey',
              height: 40,
              alignSelf: 'center',
              marginLeft: 15,
            }}></View>

          {/* CustomInputField */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CustomInputField
              placeholder="Mobile Number"
              isFirstField={true}
              maxLength={countryCode === '91' ? 10 : 14}
              keyboardType={
                Platform.OS === 'android' ? 'numeric' : 'number-pad'
              }
              value={number}
              onChangeText={handleNumberChange}
              onSubmitEditing={handleContinue}
              returnKeyType="done"
            />
          </View>
        </View>

        {/* shown error message here  */}
        {validationError ? (
          <Text style={{color: 'red'}}>{validationError}</Text>
        ) : null}

        {/* Custom Button */}
        <View style={{marginTop: '5%'}}>
          <CustomBtn
            btnLabel="Get New PIN"
            Press={handleContinue}
            textColor={deepskyblue}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgetPin;

const styles = StyleSheet.create({});