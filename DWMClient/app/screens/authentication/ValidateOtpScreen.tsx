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

import React, { useState, useEffect } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import CustomInputField from '../../components/CustomInputField';
import CustomBtn from '../../components/CustomBtn';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { apiType, apiTypes, endpoints } from '../../assets/constants/ApiConstants';
import { useLazyResendOTPQuery } from '../../services/ResendOtpService';
import { useLazyValidateOTPQuery } from '../../services/ValidateOtpService';

interface RouteParams {
  mobileNo: string
  countryCode: string
}
const ValidateOtpScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  // State for OTP
  const [otp, setOtp] = useState('');
  const [validationError, setValidationError] = useState('');

  const route = useRoute();
  const { mobileNo, countryCode } = route.params as RouteParams;

  const [resendOTPPayload, resendOTPRes] = useLazyResendOTPQuery();
  const [validateOTPrequest, validateOTPresponse] = useLazyValidateOTPQuery();

  // console.log('ValidateData OTP  : ---', ValidateData);

  // Validate OTP Response
  const handleOtpChange = (text: string) => {
    const validationRegex = /^[0-6]*$/;
    if (validationRegex.test(text) && text.length <= 6) {
      setOtp(text);
      setValidationError('');
    } else {
      setValidationError('Please enter a valid 6-digit PIN');
    }
  };

  const handleNextButtonPress = () => {
    if (validationError === '' && otp.length === 6) {
      apiType.value = apiTypes.get;
      validateOTPrequest({});
      navigation.navigate('UserDetail', { mobileNo });
      // if (validateOTPrequest.data?.data.status == 'success') {
      //   navigation.navigate('UserDetail');
      //   console.log('response :---', validateOTPrequest);
      // } else if (validateOTPrequest.data?.data.status == 'fail') {
      //   console.log('OTP failled', validateOTPrequest);
      // }
    } else {
      setValidationError('Please enter a valid 6-digit PIN');
    }
  };

  //  Resend OTP Response
  const resendOTPClick = () => {
    // Define the payload for creating the PIN and Save the user details
    apiType.value = apiTypes.get;
    endpoints.resendOtp = `/security/otp/resend/${mobileNo}?countryCodeId=${countryCode}`;
    console.log('endpoints.resendOtp: ', endpoints.resendOtp);
    resendOTPPayload({});
  };

  useEffect(() => {
    try {
      console.log('resendOTPRes try', resendOTPRes.data);
      console.log('validation response :---', validateOTPresponse.data);

      // if (resendOTPRes.data?.data.status == 'success') {
      //   console.log('response :---', resendOTP.data.data.status);
      // } else if (resendOTP.data?.data.status == 'fail') {
      //   console.log('Resend OTP failled', resendOTP.data.data.status);
      // }
    } catch (error) {
      console.error('Error :', error);
    }
  }, [resendOTPRes, validateOTPresponse]);
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: '15%' }}>

        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Please enter 6-digit OTP</Text>
        </View>
        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: '5%' }}>


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
            Press={resendOTPClick}
          />
        </View>

      </View >

    </View >
  );
}

export default ValidateOtpScreen;
