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
import { useCreatePinMutation } from '../../services/AddLeadCommonService';
import { apiType, apiTypes } from '../../assets/constants/ApiConstants';
import CustomToast from '../../components/CustomToast';

// Define a type for the expected route params
interface RouteParams {
  firstName: string;
  lastName: string;
  mobileNo: string
}

const CreatePin = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // State for Pin
  const [pin, setPin] = useState('');
  const [validationError, setValidationError] = useState('');

  const [createPinApiRequest, createPinApiResponse] = useCreatePinMutation();

  const route = useRoute();
  const { firstName, lastName, mobileNo } = route.params as RouteParams;

  const handlePinChange = (text: string) => {
    // Only allow 4 numbers
    const validationRegex = /^[0-9]*$/;
    // check input value number and length is 4
    if (validationRegex.test(text) && text.length <= 4) {
      setPin(text);
      // Clear the validation error for the field
      setValidationError('');
    } else {
      setValidationError('Please enter a valid 4-digit PIN');
    }
  };

  const handleNextButtonPress = async () => {
    if (validationError === '' && pin.length === 4) {
      try {
        // Define the payload for creating the PIN and Save the user details

        const createPinPayload = {
          buId: '',
          contactPartyId: '',
          partyId: '',
          firstName,
          lastName,
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
          pin,
          arn: '',
          countryCodeId: '645095',
          userId: '',
        };
        // Make the API request to create the PIN
        apiType.value = apiTypes.post;
        const response = await createPinApiRequest(createPinPayload).unwrap();
        // Check if the response has a reasonCode
        if (response.status === 'success') {
          // Navigate to the next screen
          navigation.navigate('RMLeadMap', { pin, mobileNo });
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
      setValidationError('Please enter a valid 4-digit PIN');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop:'15%'}}>

        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Please create a 4-digit PIN</Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>for quick access</Text>
        </View>

        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical:'5%' }}>
          <CustomInputField
            placeholder="Enter PIN"
            secureTextEntry={true}
            maxLength={4}
            keyboardType='numeric'
            errorMessage={validationError}
            value={pin}
            onChangeText={handlePinChange}
            onSubmitEditing={handleNextButtonPress}
          />
        </View>

      </View>
    </View>
  );
}

export default CreatePin;