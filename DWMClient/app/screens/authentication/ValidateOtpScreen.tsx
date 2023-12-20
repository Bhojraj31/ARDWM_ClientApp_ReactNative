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
import { NavigationProp, useNavigation, useRoute, } from '@react-navigation/native';
import { apiErrorType, apiResStatus, apiType, apiTypes, } from '../../assets/constants/ApiConstants';
import { useLazyResendOTPQuery } from '../../services/ResendOtpService';
import { useLazyValidateOTPQuery } from '../../services/ValidateOtpService';
import { clientValidateDetail } from '../../slices/ValidateOtpSlice';
import { useDispatch } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import { store } from '../../store';
import { useTheme } from '../../theme/ThemeProvider';

interface RouteParams {
  mobileNo: string;
  countryCode: string;
}
const ValidateOtpScreen = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { label, button, background } = theme.colors;
  const toast = useToast();
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isResendOtpClicked, setIsResendOTPClicked] = useState(false);

  /// -------------------------- Initial Setup -----------------------
  const [otp, setOtp] = useState('');
  const [validationError, setValidationError] = useState('');

  const route = useRoute();
  const { mobileNo, countryCode } = route.params as RouteParams;

  /// -------------------------- Required Query Setup -----------------------
  const [resendOtpPayload, resendOtpRes] = useLazyResendOTPQuery();
  const [validateOtpPayload, validateOtpRes] = useLazyValidateOTPQuery();

  /// -------------------------- Handling TextInput Change ------------------
  const handleOtpChange = (text: string) => {
    const validationRegex = /^[0-6]*$/;
    if (validationRegex.test(text) || text.length <= 6) {
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
      setLoading(true);
      validateOtpApi();
    } else {
      setValidationError('Please enter a valid 6-digit PIN');
    }
  };

  /// -------------------------- Button Actions -------------------------
  const resendOTPClick = () => {
    setLoading(true);
    resendOtpApi();
  };

  /// ----------------------------- API Call -------------------------
  async function validateOtpApi() {
    setIsResendOTPClicked(false);
    apiType.value = apiTypes.get;

    try {
      const res = await validateOtpPayload({ otp: otp, mobile: mobileNo }).unwrap();

      if (res.status === apiResStatus.SUCCESS) {
        dispatch(clientValidateDetail(res.responseObject));
        moveToNextScreen();
      } else if (res.status.toLowerCase() === apiResStatus.FAIL) {
        toast.show(res.reasonCode);
        console.log('Validate OTP api fail', res.reasonCode);
      } else {
        console.log('Validate OTP Api  Error');
      }
    } catch {
      toast.show(apiErrorType.APP_MESSAGE)
    } finally {
      setLoading(false); // Stop loading indicator in case of success or failure
    }
  }

  async function resendOtpApi() {
    setIsResendOTPClicked(true);
    apiType.value = apiTypes.get;

    try {
      const res = await resendOtpPayload({}).unwrap();

      // Resend OTP Api Response
      if (res.status === apiResStatus.SUCCESS) {
        toast.show('OTP sent successfully');
        console.log('resend OTP api succuss');
      } else if (res.status === apiResStatus.FAIL) {
        toast.show(res.reasonCode);
        console.log('resend OTP api fail');
      } else {
        console.log('resend OTP Api Error');
      }
    } catch (error) {
      toast.show(apiErrorType.APP_MESSAGE)
    } finally {
      setLoading(false); // Stop loading indicator in case of success or failure
    }
  }

  function moveToNextScreen() {
    let isActive = store.getState().validateOtp.responseObject.isActive
    if (isActive === "0") {
      navigation.navigate('UserDetail', { mobileNo });
    } else {
      navigation.navigate('EnterPin');
    }
  }

  /// ----------------------------- Getting API Response -------------------------
  // useEffect(() => {
  //   try {
  //     if (isResendOtpClicked === false) {
  //       // Validate OTP Api Response
  //       // if (validateOtpRes.data?.status === apiResStatus.SUCCESS) {
  //       //   dispatch(clientValidateDetail(validateOtpRes.data?.responseObject));
  //       //   setLoading(false);
  //       //   moveToNextScreen();
  //       // } else if (validateOtpRes.data?.status === apiResStatus.FAIL) {
  //       //   toast.show(validateOtpRes.data?.reasonCode);
  //       //   console.log('Validate OTP api fail', validateOtpRes.data?.reasonCode);
  //       // } else {
  //       //   console.log('Validate OTP Api  Error');
  //       // }
  //     } else {
  //       // // Resend OTP Api Response
  //       // if (resendOtpRes.data?.status === apiResStatus.SUCCESS) {
  //       //   toast.show('OTP sent successfully');
  //       //   console.log('resend OTP api succuss');
  //       // } else if (resendOtpRes.data?.status === apiResStatus.FAIL) {
  //       //   toast.show(resendOtpRes.data?.reasonCode);
  //       //   console.log('resend OTP api fail');
  //       // } else {
  //       //   console.log('resend OTP Api Error');
  //       // }
  //     }

  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error('Error :', error);
  //   } finally {
  //     // setLoading(false);
  //   }
  // }, [validateOtpRes,resendOtpRes]);

  /// ----------------------------- Render UI -------------------------
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      {/* Conditional rendering for the Loader */}
      {loading && (
        <View style={StyleSheet.absoluteFill}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={button} />
          </View>
        </View>
      )}

      {/* Main content */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '15%',
        }}>
        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>
            Please enter 6-digit OTP
          </Text>
        </View>

        {/* Fields */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: '5%',
          }}>
          <CustomInputField
            placeholder="Enter OTP"
            isFirstField={true}
            secureTextEntry={true}
            width={100}
            maxLength={6}
            keyboardType="number-pad"
            value={otp}
            textAlign="center"
            onChangeText={handleOtpChange}
            onSubmitEditing={handleNextButtonPress}
            returnKeyType="done"
          />
        </View>

        {/* shown error message here  */}
        {validationError ? (
          <Text style={{ color: 'red' }}>{validationError}</Text>
        ) : null}

        {/* Resend OTP button here */}
        <View>
          <CustomBtn
            textColor={button}
            btnLabel="Resend OTP"
            Press={resendOTPClick}
          />
        </View>
      </View>
    </View>
  );
};

export default ValidateOtpScreen;