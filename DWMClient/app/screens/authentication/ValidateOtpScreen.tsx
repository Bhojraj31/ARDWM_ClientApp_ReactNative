/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Create Pin
* @Type:- Functional Component
* @Role:- For showing Create Pin
* @Sprint:- Sprint 1.0 -- Jira ID DRN-7
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  06-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import React, { useState } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import CustomInputField from '../../components/CustomInputField';
import CustomBtn from '../../components/CustomBtn';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

interface RouteParams {
  mobileNo: string
  countryCode: string
}
const ValidateOtpScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  
  const route = useRoute();
  const { mobileNo , countryCode } = route.params as RouteParams;

  // State for Otp
  const [otp, setOtp] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleOtpChange = (text: string) => {
    // Only allow 6 numbers
    const validationRegex = /^[0-9]*$/;
    // check input value number and length is 4
    if (validationRegex.test(text) && text.length <= 6) {
      setOtp(text);
      // Clear the validation error for the field
      setValidationError('');
    } else {
      setValidationError('Please enter a valid 6-digit OTP');
    }
  };


  const handleNextButtonPress = async () => {
    if (validationError === '' && otp.length === 6) {
      navigation.navigate('UserDetail',{mobileNo})
    } else {
      setValidationError('Please enter a valid 6-digit OTP');
    }
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop:'15%' }}>

        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Please enter 6-digit OTP</Text>
        </View>
        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical:'5%'}}>
          <CustomInputField
            placeholder="Enter OTP"
            secureTextEntry={true}
            maxLength={6}
            keyboardType='numeric'
            errorMessage={validationError}
            value={otp}
            onChangeText={handleOtpChange}
            onSubmitEditing={handleNextButtonPress}
          />
        </View>

        {/* button */}
        <View>
          <CustomBtn
            textColor={deepskyblue}
            btnLabel="Resend OTP"
            Press={handleNextButtonPress}
          />
        </View>

        {/* for space */}
        <View style={{ flex: 0.7 }}></View>
      </View>
    </View>
  );
}

export default ValidateOtpScreen;
