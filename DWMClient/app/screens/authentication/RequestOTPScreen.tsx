// /*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
// /**
//  * @param - NA
//  * @return -- NA
//  * @Name:- mobile number screen
//  * @Type:- functional component
//  * @Ver - 1.0
//  * @Role:- enter mobile number and country code
//  * @Sprint:- Sprint 1.0 -- Jira ID DRN-4
//  * @Created by:- Yashwant Lohar
//  * @Created on:-  04-Oct-2023
//  * @Last Modified by:- No
//  * @Last modified on:- No
//  */

import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import CustomInputField from '../../components/CustomInputField'
import CustomBtn from '../../components/CustomBtn'
import { background, deepskyblue } from '../../assets/constants/ColorConstants'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCreatePinMutation } from '../../services/AddLeadCommonService'
import { apiType, apiTypes } from '../../assets/constants/ApiConstants'

const RequestOTPScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  const [mobileNo, setMobileNo] = useState('');
  const [validationError, setValidationError] = useState('');

  const [createPinApiRequest, createPinApiResponse] = useCreatePinMutation();

  const handleNumberChange = (text: string) => {
    // Only allow 10 numbers
    const validationRegex = /^[0-9]*$/;
    // check input value number and length is 10
    if (validationRegex.test(text) && text.length <= 10) {
      setMobileNo(text);
      // Clear the validation error for the field
      setValidationError('');
    } else {
      setValidationError('enter valid number');
    }
  };

  const handleContinue = async () => {
    if (validationError === '' && mobileNo.length === 10) {
      try {
        // Define the payload for creating the user Number
        const createNumberPayload = {
          buId: '',
          contactPartyId: '',
          partyId: '',
          firstName: '',
          lastName: '',
          emailId: '',
          city: '',
          address1: '',
          address2: '',
          address3: '',
          Country: '',
          State: '',
          PinCode: '',
          gender: '',
          expinyr: '',
          expinmon: '',
          organization: '',
          designation: '',
          mobileNo,
          lastModifiedBy: '',
          lastModifiedDateTime: '',
          sourceSystemobject: '634004',
          sourceSystemId: '',
          macId: '',
          campaign: '',
          flag: '',
          UTM1: '',
          UTM2: '',
          UTM3: '',
          currentSavings: '',
          UtmContent: '',
          UtmTerm: '',
          longitude: '',
          latitude: '',
          pin: '',
          arn: '',
          countryCodeId: '645095',
          userId: '',
        };
        // Make the API request to create the PIN
        apiType.value = apiTypes.post;
        const response = await createPinApiRequest(createNumberPayload).unwrap();
        // Check if the response has a reasonCode
        if (response.status === 'success') {
          // Navigate to the next screen
          const countryCode = createNumberPayload.countryCodeId;
          navigation.navigate('ValidateOTP', { mobileNo, countryCode});
          
          console.log(response);
          // Display the reasonCode in a toast
          ToastAndroid.showWithGravityAndOffset(response.reasonCode, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 0);
        } else if (response.status === 'fail') {
          ToastAndroid.showWithGravityAndOffset(response.reasonCode, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 0);
        }
      } catch (error) {
        // Handle any errors here
        console.error('Error creating PIN:', error);
      }
    } else {
      setValidationError('enter valid number');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: '10%' }}>

        {/* Tittle */}
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>
            Please enter your 10-digit
          </Text>
          <Text style={{ fontSize: 18, color: 'grey' }}>
            mobile number
          </Text>
        </View>

        {/* Fields */}
        <View style={{ flexDirection: 'row' , marginTop:'5%'}}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20 }}>+91</Text>
          </View>

          <View style={{ borderRightWidth: 1, borderColor: 'grey', height: 40, alignSelf: 'center', marginLeft: 15 }}></View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CustomInputField
              placeholder="Mobile Number"
              maxLength={10}
              keyboardType='numeric'
              textAlign="left"
              errorMessage={validationError}
              value={mobileNo}
              onChangeText={handleNumberChange}
              onSubmitEditing={handleContinue}
            />
          </View>
        </View>

      </View>
    </View>
  )
}

export default RequestOTPScreen

const styles = StyleSheet.create({})