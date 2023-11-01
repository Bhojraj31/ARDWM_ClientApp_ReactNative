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

import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInputField from '../../components/CustomInputField'
import CustomBtn from '../../components/CustomBtn'
import { background, deepskyblue } from '../../assets/constants/ColorConstants'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { apiType, apiTypes } from '../../assets/constants/ApiConstants'
import { useForgetPinMutation } from '../../services/ForgetPinService';

const ForgetPin = () => {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
    const [number, setNumber] = useState('');
    const [validationError, setValidationError] = useState('');
    const [forgetPinApiRequest, forgetPinApiResponse] = useForgetPinMutation()

    const handleNumberChange = (text: string) => {
        // Only allow 10 numbers
        const validationRegex = /^[0-9]*$/;
        // check input value number and length is 10
        if (validationRegex.test(text) && text.length <= 10) {
            setNumber(text);
            // Clear the validation error for the field
            setValidationError('');
        } else {
            setValidationError('enter valid number');
        }
    };

    const handleContinue = async () => {
        if (validationError === '' && number.length === 10) {
            try {
                apiType.value = apiTypes.get;
                const response = await forgetPinApiRequest({});

                if (forgetPinApiResponse.isSuccess) {
                    console.log('ForgetPin API Response:', response);
                    console.log('ForgetPin API Response:', forgetPinApiResponse.data.status);
                    // navigate to next screen 
                    navigation.goBack();
                } else {
                    console.log('ForgetPin fail Response', response);
                    // console.log('ForgetPin API Response:', response.responseObject.number);
                }
            } catch (error) {
                console.error('API Request Error:', error);
            }
        } else {
            setValidationError('enter valid number');
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: background }}>
            <View style={{ flex: .9, justifyContent: 'space-evenly', alignItems: 'center' }}>
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
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>+91</Text>
                    </View>

                    <View style={{ borderRightWidth: 1, borderColor: 'grey', height: 40, alignSelf: 'center', marginLeft: 20 }}></View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <CustomInputField
                            placeholder="Mobile Number"
                            maxLength={10}
                            keyboardType='numeric'
                            textAlign="left"
                            errorMessage={validationError}
                            value={number}
                            onChangeText={handleNumberChange}
                            onSubmitEditing={handleContinue}
                        />
                    </View>
                </View>

                <View style={{ flex: .7 }}>
                </View>
            </View>
        </View>
    )
}

export default ForgetPin

const styles = StyleSheet.create({})