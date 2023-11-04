// BHOJRAJ SINGH SHEKHAWAT

import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import CustomInputField from '../../components/CustomInputField';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCreatePinMutation } from '../../services/AddLeadCommonService';
import { apiType, apiTypes } from '../../assets/constants/ApiConstants';

const RMLeadMapScreen = () => {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

    const [meetingID, setMeetingID] = useState('');
    const [partnerCode, setPartnerCode] = useState('');
    const [ValidationError, setValidationError] = useState('');


    const handleChange = (text: string, inputField: string) => {
        if (inputField === 'MeetingID') {
            // Validation for Meeting ID: Alphabets, numbers, and spaces are allowed.
            const validationRegex = /^[a-zA-Z0-9\s]*$/;
            if (validationRegex.test(text) || text === '') {
                setMeetingID(text);
                setValidationError('');
            } else {
                setValidationError('Invalid characters in Meeting ID');
            }
        } else if (inputField === 'PartnerCode') {
            // Validation for Partner Code: Only numbers are allowed and a length of 6.
            const validationRegex = /^[0-9]*$/;
            if (validationRegex.test(text) && text.length <= 6) {
                setPartnerCode(text);
                setValidationError('');
            } else {
                setValidationError('Invalid Partner Code');
            }
        }
    };

    const handleNextScreen = async () => {
        if (meetingID || partnerCode.length === 6 && !ValidationError && !ValidationError) {
            navigation.navigate('EnterPin');
        }
        else {
            setValidationError('Please enter a valid Detail');
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: background }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: '10%' }}>
                <Text style={{ color: deepskyblue, fontSize: 20 }}>
                    Please Enter Meeting ID/Partner Code
                </Text>

                <CustomInputField
                    placeholder='Meeting ID'
                    value={meetingID}
                    onChangeText={(text) => handleChange(text, 'MeetingID')}
                    onSubmitEditing={handleNextScreen}

                />

                <Text style={{ color: 'white', fontSize: 20 }}>
                    OR
                </Text>

                <CustomInputField
                    placeholder='Partner Code'
                    secureTextEntry={true}
                    maxLength={6}
                    // keyboardType='numeric'
                    errorMessage={ValidationError}
                    value={partnerCode}
                    onChangeText={(text) => handleChange(text, 'PartnerCode')}
                    onSubmitEditing={handleNextScreen}
                />
            </View>
        </View>
    );
};

export default RMLeadMapScreen;

const styles = StyleSheet.create({});

