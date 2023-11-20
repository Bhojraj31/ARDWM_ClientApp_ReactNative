/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Create Pin
 * @Type:- Functional Component
 * @Role:- For showing Create Pin
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-7
 * @Created by:- Bhojraj Singh Shekhawat , Yashwant Lohar
 * @Created on:-  06-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import CustomInputField from '../../components/CustomInputField';
import { NavigationProp, useNavigation, } from '@react-navigation/native';
import { useCreatePinMutation } from '../../services/AddLeadCommonService';
import { apiErrorType, apiResStatus, apiType, apiTypes } from '../../assets/constants/ApiConstants';
import { useWorkSiteListMutation } from '../../services/WorkSiteService';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { store } from '../../store';
import { useToast } from 'react-native-toast-notifications';

const RMLeadMapScreen = () => {
  const toast = useToast();
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const [loading, setLoading] = useState(false);

  const [meetingID, setMeetingID] = useState('');
  const [partnerCode, setPartnerCode] = useState('');
  const [validationError, setValidationError] = useState('');

  const [worksiteBody] = useWorkSiteListMutation();
  const [mapRMBody] = useCreatePinMutation();

  const dispatch = useDispatch();

  const handleChange = (text: string, inputField: string) => {
    if (inputField === 'MeetingID') {
      // Validation for Meeting ID: Only alphabets and numbers are allowed, and it must be exactly 7 characters.
      const validationRegex = /^[a-zA-Z0-9]*$/;
      if (validationRegex.test(text) && text.length <= 7) {
        setMeetingID(text);
        setValidationError('');
      } else {
        setValidationError('Please enter a valid 7-Digit Meeting ID');
      }
    } else if (inputField === 'PartnerCode') {
      // Validation for Partner Code: Only numbers are allowed, and it must be exactly 6 characters.
      const validationRegex = /^[0-9]*$/;
      if (validationRegex.test(text) && text.length <=6 ) {
        setPartnerCode(text);
        setValidationError('');
      } else {
        setValidationError('Please enter a valid 6-Digit Partner Code');
      }
    }
  };



  const handleEndEditing = (inputField: string) => {
    if (inputField === 'MeetingID') {
      if (validationError === '' && meetingID.length === 7) {
        setLoading(true);
        joinMeetingApi()
      } else {
        setValidationError('Please enter valid 7-Digit Meeting ID');
      }
    } else if (inputField === 'PartnerCode') {
      if (validationError === '' && inputField === 'PartnerCode' && partnerCode.length === 6) {
        setLoading(true);
        RMMapApi()
      } else {
        setValidationError('Please enter valid 6-Digit Partner Code');
      }
    }
  }

  const handleNextScreen = async () => {
    if (meetingID || partnerCode.length === 6 && !validationError && !validationError) {
      navigation.navigate('EnterPin');
    }
    else {
      setValidationError('Please enter a valid Detail');
    }
  };

  ///------ Api Call ---------
  const joinMeetingApi = async () => {
    let dateTime = moment().format('DD/MM/YYYY HH:mm:ss');

    let partyId = store.getState().onBoarding.data.partId
    let userId = store.getState().onBoarding.data.userId

    apiType.value = apiTypes.post;
    const worksiteRes = await worksiteBody({
      worksiteSessionId: meetingID,
      partyId: partyId,
      lastModifiedBy: userId,
      lastModifiedDateTime: dateTime
    }).unwrap();

    if (worksiteRes.status === apiResStatus.SUCCESS) {
      toast.show(worksiteRes.reasonCode)
    } else if (worksiteRes.status === apiResStatus.FAIL) {
      toast.show(worksiteRes.reasonCode)
    } else {
      toast.show(apiErrorType.APP_MESSAGE)
    }
    setLoading(false)
  }

  const RMMapApi = async () => {
    const mapRMRes = await mapRMBody(
      setRmMapPayload()
    ).unwrap()

    if (mapRMRes.status === apiResStatus.SUCCESS) {
      toast.show(mapRMRes.reasonCode)
    } else if (mapRMRes.status === apiResStatus.FAIL) {
      toast.show(mapRMRes.reasonCode)
    } else {
      toast.show(apiErrorType.APP_MESSAGE)
    }
    setLoading(false)
  }

  function setRmMapPayload() {
    let partyId = store.getState().onBoarding.data.partId
    let mobileNo = store.getState().onBoarding.data.mobNo

    const rmMapPayload = {
      buId: '',
      contactPartyId: partyId,
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
      arn: partnerCode,
      countryCodeId: '',
      userId: '',
    };

    console.log('rmMapPayload:', rmMapPayload)
    return rmMapPayload
  }

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
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: '10%' }}>
        <Text style={{ color: deepskyblue, fontSize: 20 }}>
          Please Enter Meeting ID/Partner Code
        </Text>

        <CustomInputField
          placeholder='Meeting ID'
          width={100}
          maxLength={7}
          isFirstField={true}
          value={meetingID}
          textAlign={meetingID ? 'center' : 'left'}
          onChangeText={(text) => handleChange(text, 'MeetingID')}
          onSubmitEditing={(text) => handleEndEditing('MeetingID')}
        />

        <Text style={{ color: 'white', fontSize: 20 }}>
          OR
        </Text>

        <CustomInputField
          placeholder='Partner Code'
          secureTextEntry={false}
          maxLength={6}
          width={120}
          keyboardType='number-pad'
          value={partnerCode}
          textAlign={partnerCode ? 'center' : 'left'}
          onChangeText={(text) => handleChange(text, 'PartnerCode')}
          onSubmitEditing={(text) => handleEndEditing('PartnerCode')}
          returnKeyType='done'
        />
        {/* shown error message here  */}
        {
          validationError ? (
            <Text style={{ color: 'red' }}>{validationError}</Text>
          )
            :
            (
              null
            )
        }

      </View>
    </View>
  );
};

export default RMLeadMapScreen;

const styles = StyleSheet.create({});