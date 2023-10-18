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
import InputField from '../components/InputField';
import Btn from '../components/Btn';
import { background, deepskyblue } from '../assets/constants/ColorConstants';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCreatePinMutation } from '../service/AddLeadCommonService';
import { apiType, apiTypes } from '../assets/constants/ApiConstants';
// Define a type for the expected route params
interface RouteParams {
  firstName: string;
  lastName: string;
}

const tempPayload = {
  "buId": "",
  "contactPartyId": "1655452",
  "partyId": "",
  "firstName": "Ajeet",
  "lastName": "Singh",
  "emailId": "",
  "city": "",
  "address1": "",
  "address2": "",
  "address3": "",
  "Country": "",
  "State": "",
  "PinCode": "",
  "gender": "",
  "expinyr": "",
  "expinmon": "",
  "organization": "",
  "designation": "",
  "mobileNo": "1000025528",
  "lastModifiedBy": "",
  "lastModifiedDateTime": "",
  "sourceSystemobject": "634004",
  "sourceSystemId": "",
  "macId": "",
  "campaign": "",
  "flag": "",
  "UTM1": "",
  "UTM2": "",
  "UTM3": "",
  "currentSavings": "",
  "UtmContent": "",
  "UtmTerm": "",
  "longitude": "",
  "latitude": "",
  "pin": "1234",
  "arn": "",
  "countryCodeId": "645095",
  "userId": "2445079"
}

const CreatePin = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const [pin, setPin] = useState('');
  const [validationError, setValidationError] = useState('');

  const [createPinApiRequest, createPinApiResponse] = useCreatePinMutation();
  

  const route = useRoute();
  const { firstName, lastName } = route.params as RouteParams;

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
          mobileNo: '',
          lastModifiedBy: '',
          lastModifiedDateTime: '',
          sourceSystemobject: '',
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
          countryCodeId: '',
          userId: '',
        };
        
        // Make the API request to create the PIN
        apiType.value = apiTypes.post;
        const response = await createPinApiRequest(createPinPayload).unwrap();
        
        // Check if the response has a reasonCode
        if (response.reasonCode) {
          // Display the reasonCode in a toast
          ToastAndroid.showWithGravityAndOffset(response.reasonCode, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 0);
        }
        // Navigate to the next screen
        navigation.navigate('EnterPin', { pin });
        
        console.log(createPinPayload.firstName);
        console.log(createPinPayload.lastName);
        console.log(createPinPayload.pin);
        console.log(response);
      } catch (error) {
        // Handle any errors here
        console.error('Error creating PIN:', error);
      }
    } else {
      setValidationError('Please enter a valid 4-digit PIN');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: background }}>
      <View style={{ flex: 0.9, justifyContent: 'space-evenly', alignItems: 'center' }}>

        {/* title */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Please create a 4-digit PIN</Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>for quick access</Text>
        </View>
        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <InputField
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

        {/* for space */}
        <View style={{ flex: 0.7 }}></View>
      </View>
    </View>
  );
}

export default CreatePin;
