/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- User Detail
* @Type:- Functional Component
* @Role:- for showing User Detail
* @Sprint:- Sprint 1.0 -- Jira ID DRN-6
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputField from '../components/InputField';
import Btn from '../components/Btn';
import { background, deepskyblue } from '../assets/constants/ColorConstants';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const UserDetail = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // state for userData
  const [userData, setUserData] = React.useState({
    firstName: '',
    lastName: '',
  });

  // state for validation
  const [validationErrors, setValidationErrors] = React.useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (fieldName: string, text: string) => {
    // Allow only alphabets and spaces
    const validationRegex = /^[A-Za-z\s]+$/;

    if (validationRegex.test(text) || text === '') {
      setUserData((prevData) => ({
        ...prevData,
        [fieldName]: text,
      }));

      // Clear the validation error for the current field
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: '',
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: 'Enter ',
      }));
    }
  };

  const handleContinue = () => {
    if (userData.firstName && userData.lastName) {
      navigation.navigate('CreatePin', userData);
      // console.log(userData);
    } else {
      // Set validation errors for any missing fields
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        // fieldName : userData ? '' : 'Please fill required'
        firstName: userData.firstName ? '' : 'FName is required',
        lastName: userData.lastName ? '' : 'LName is required',
      }));
    }
  };

  return (
    // parent View 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: background }}>

      {/* Content */}
      <View style={{ flex: 0.9, justifyContent: 'space-evenly', alignItems: 'center' }}>

        {/* tittle */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Do tell us a little</Text>
          <Text style={{ fontSize: 20, color: 'grey' }}>about yourself</Text>
        </View>

        {/* Input fields */}
        <View>
          <InputField
            placeholder="First Name"
            textAlign='center'
            errorMessage={validationErrors.firstName}
            value={userData.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          <InputField
            placeholder="Last Name"
            textAlign='center'
            errorMessage={validationErrors.lastName}
            value={userData.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
        </View>

        {/* Continue Button */}
        <View>
          <Btn
            textColor={deepskyblue}
            btnLabel="Continue"
            Press={handleContinue}
          />
        </View>

        {/* For Space */}
        <View style={{ flex: 0.5 }}></View>
      </View>
    </View>
  );
};

export default UserDetail;
