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
import CustomInputField from '../../components/CustomInputField';
import CustomBtn from '../../components/CustomBtn';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

interface RouteParams {
  mobileNo: string;
}

const UserDetail = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const route = useRoute();
  const { mobileNo } = route.params as RouteParams;

  // state for userData
  const [userData, setUserData] = React.useState({
    firstName: '',
    lastName: '',
    mobileNo,
  });

  // state for validation
  const [validationErrors, setValidationErrors] = React.useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (fieldName: string, text: string) => {
    // Allow only alphabets and spaces
    const validationRegex = /^[A-Za-z]+$/;
    if (validationRegex.test(text) || text === '') {
      setUserData(prevData => ({
        ...prevData,
        [fieldName]: text,
      }));

      // Clear the validation error for the current field
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        [fieldName]: '',
      }));
    } else {
      // Set validation errors for other then character.
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        [fieldName]: `${fieldName === 'firstName' ? 'First' : 'Last'
          } Name is required `,
      }));
    }
  };

  const handleContinue = () => {
    if (userData.firstName && userData.lastName) {
      navigation.navigate('CreatePin', userData);
    } else {
      // Set validation errors for any missing fields
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        firstName: userData.firstName ? '' : 'First Name is required',
        lastName: userData.lastName ? '' : 'Last Name is required',
      }));
    }
  };

  return (
    // parent View
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
      {/* Content */}
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        {/* tittle */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Do tell us a little</Text>
          <Text style={{ fontSize: 20, color: 'grey' }}>about yourself</Text>
        </View>

        {/* Input fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>

          <CustomInputField
            placeholder="First Name"
            width={100}
            isFirstField={true}
            errorMessage={validationErrors.firstName}
            value={userData.firstName}
            textAlign={userData.firstName ? 'center' : 'left'}
            onChangeText={text => handleInputChange('firstName', text)}
          />

        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>

          <CustomInputField
            placeholder="Last Name"
            width={100}
            errorMessage={validationErrors.lastName}
            value={userData.lastName}
            textAlign={userData.lastName ? 'center' : 'left'}
            onChangeText={text => handleInputChange('lastName', text)}
          />
        </View>
        {/* Continue Button */}
        <View>
          <CustomBtn
            textColor={deepskyblue}
            btnLabel="Continue"
            Press={handleContinue}
          />
        </View>
      </View>
    </View>
  );
};

export default UserDetail;