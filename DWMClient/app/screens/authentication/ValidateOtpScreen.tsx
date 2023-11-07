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
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import CustomInputField from '../../components/CustomInputField';
import CustomBtn from '../../components/CustomBtn';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { apiResStatus, apiType, apiTypes, endpoints } from '../../assets/constants/ApiConstants';
import { useLazyResendOTPQuery } from '../../services/ResendOtpService';
import { useLazyValidateOTPQuery } from '../../services/ValidateOtpService';
import { clientValidateDetail } from '../../slices/ValidateOtpSlice';
import { useDispatch } from 'react-redux';

interface RouteParams {
  mobileNo: string
  countryCode: string
}
const ValidateOtpScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  /// -------------------------- Initial Setup -----------------------
  const [otp, setOtp] = useState('');
  const [validationError, setValidationError] = useState('');

  const route = useRoute();
  const { mobileNo, countryCode } = route.params as RouteParams;

  /// -------------------------- Required Query Setup -----------------------
  const [resendOtpPayload, resendOtpRes] = useLazyResendOTPQuery();
  const [validateOtpPayload, validateOtpRes] = useLazyValidateOTPQuery();;

  /// -------------------------- Handling TextInput Change ------------------
  const handleOtpChange = (text: string) => {
    const validationRegex = /^[0-6]*$/;
    if (validationRegex.test(text) && text.length <= 6) {
      setOtp(text);
      setValidationError('');
    } else {
      setValidationError('Please enter a valid 6-digit PIN');
    }
  };

  /// -------------------------- Keyboard submission -------------------
  const handleNextButtonPress = () => {
    if (validationError === '' && otp.length === 6) {
      // Start loading indicator
      setLoading(true)
      validateOtpApi()
    } else {
      setValidationError('Please enter a valid 6-digit PIN');
    }
  };

  /// -------------------------- Button Actions -------------------------
  const resendOTPClick = () => {
    resendOtpApi()
  };

  /// ----------------------------- API Call -------------------------
  function validateOtpApi() {
    apiType.value = apiTypes.get;
    validateOtpPayload({ otp: otp, mobile: mobileNo });
  }

  function resendOtpApi() {
    apiType.value = apiTypes.get;
    resendOtpPayload({});
  }

  function moveToNextScreen() {
    navigation.navigate('UserDetail', { mobileNo })
  }

  /// ----------------------------- Getting API Response -------------------------
  useEffect(() => {
    try {
      // Validate OTP Api Response
      console.log('validateOtpRes: ', validateOtpRes)
      if (validateOtpRes.data?.status === apiResStatus.SUCCESS) {
        dispatch(clientValidateDetail(validateOtpRes.data?.responseObject))
        setLoading(false)
        moveToNextScreen()
      } else if (validateOtpRes.data?.status === apiResStatus.FAIL) {
        console.log('api fail')
      } else {
        console.log('Validate OTP Api  Error')
      }

      // Resend OTP Api Response
      if (resendOtpRes.data?.data.status === apiResStatus.SUCCESS) {
        console.log('api succuss')
      } else if (resendOtpRes.data?.data.status === apiResStatus.FAIL) {
        console.log('api fail')
      } else {
        console.log('resend OTP Api Error')
      }
    } catch (error) {
      console.error('Error :', error);
    } finally {
      // setLoading(false);
    }
  }, [validateOtpRes, resendOtpRes]);

  /// ----------------------------- Render UI -------------------------
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      {/* Conditional rendering for the Loader */}
      {loading && (
        <View style={StyleSheet.absoluteFill}>
          <View style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={deepskyblue} />
          </View>
        </View>
      )}

      {/* Main content */}
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: '15%' }}>
        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Please enter 6-digit OTP</Text>
        </View>
        
        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: '5%' }}>
          <CustomInputField
            placeholder="Enter OTP"
            isFirstField={true}
            secureTextEntry={true}
            maxLength={6}
            keyboardType='numeric'
            errorMessage={validationError}
            value={otp}
            onChangeText={handleOtpChange}
            onSubmitEditing={handleNextButtonPress}
            returnKeyType='done'
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
