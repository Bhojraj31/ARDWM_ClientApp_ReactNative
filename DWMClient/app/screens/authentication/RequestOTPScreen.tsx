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

import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, SetStateAction, useEffect } from 'react';
import CustomInputField from '../../components/CustomInputField'
import { background, deepskyblue } from '../../assets/constants/ColorConstants'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCreatePinMutation } from '../../services/AddLeadCommonService'
import { apiErrorType, apiResStatus, apiType, apiTypes } from '../../assets/constants/ApiConstants'
import { useToast } from "react-native-toast-notifications";
import CustomBtn from '../../components/CustomBtn';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomModal from '../../components/CustomModal';
import { useLazyCountryQuery } from '../../services/CountryApiService';
import { useDispatch } from 'react-redux';
import { setCountry } from '../../slices/CountryApiSlice';
import { store } from '../../store';
import CountryList from '../../components/countryList';
import { onBoarding } from '../../slices/onBoardingSlice';

const RequestOTPScreen = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const [mobileNo, setMobileNo] = useState('');
  const [validationError, setValidationError] = useState('');
  const [createPinApiRequest, createPinApiResponse] = useCreatePinMutation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState('91');
  const [selectedId, setSelectedId] = React.useState('645095');

  const [data, setData] = React.useState([{}]);

  var countryData: { "key": string; "value": string; }[] = [];

  const setupCountryData = () => {
    const cData = store.getState().country;
    countryData = [];

    for (let i = 0; i < cData.responseListObject.length; i++) {
      var obj = cData.responseListObject[i];

      countryData.push({
        "key": `${obj.mappedValue1}`,
        "value": `(${obj.mappedValue1})  ${obj.codeValue}`
      })
    }
    // console.log('updated Country Arr:', countryData)
    setData(countryData)
  };

  const openModal = () => {
    setupCountryData();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNumberChange = (text: string) => {
    const validationRegex = /^[0-9]*$/;
    if (validationRegex.test(text) && text.length <= 10) {
      setMobileNo(text);
      setValidationError('');
    } else {
      setValidationError('enter valid number');
    }
  };

  const handleNextButtonPress = async () => {
    if (validationError === '' && mobileNo.length === 10) {
      try {
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

        // Start loading indicator
        setLoading(true);
        // Make the API request to get OTP
        apiType.value = apiTypes.post;
        const response = await createPinApiRequest(
          createNumberPayload,
        ).unwrap();

        if (response.status === apiResStatus.SUCCESS) {
          const ccId = createNumberPayload.countryCodeId;
          let data = {
            partId: response.responseObject.partyId,
            userId: response.responseObject.userId,
            mobNo: mobileNo,
            selectedCountryCode: ccId
          }

          dispatch(onBoarding(data))

          navigation.navigate('ValidateOTP', { mobileNo, ccId });
        } else if (response.status === apiResStatus.FAIL) {
          toast.show(response.reasonCode)
        }
      } catch (error) {
        toast.show(apiErrorType.APP_MESSAGE)
      } finally {
        setLoading(false); // Stop loading indicator in case of success or failure
      }
    } else {
      setValidationError('Please enter a valid 10-digit Mobile Number');
    }
  };

  // Country Api Response
  // const dataitem = useCountryQuery({});
  // console.log('get country data :', JSON.stringify(dataitem));

  const [CountryCodeRequest, CountryCodeResponse] = useLazyCountryQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    apiType.value = apiTypes.get;
    CountryCodeRequest({});
  }, []);

  useEffect(() => {
    if (CountryCodeResponse.data?.status == 'success') {
      const CopuntryCode = CountryCodeResponse.data.responseListObject;
      dispatch(setCountry(CopuntryCode));
      // console.log('CountryCodeResponse:', JSON.stringify(CountryCodeResponse));
    } else if (CountryCodeResponse.isError) {
      console.log('response APi Token fail');
    }
  }, [CountryCodeResponse]);

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: '10%' }}>

        {/* Tittle */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>
            Please enter your 10-digit
          </Text>
          <Text style={{ fontSize: 18, color: 'grey' }}>mobile number</Text>
        </View>

        {/* Fields */}

        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={openModal}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 17 }}>{`+${selected}`}</Text>
            </TouchableOpacity>
            <CustomModal modalContianer={{}} isVisible={modalVisible}>
              <View
                style={{
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <SelectList
                  setSelected={(val: SetStateAction<string>, key: SetStateAction<string>) =>
                    setSelected(val)
                  }
                  data={data}
                  save="key"
                  maxHeight={330}
                  searchPlaceholder="Select Country"
                  placeholder="Select Country"
                />
                {/* <CountryList placeHolder={'Search'} sourceData={countryData}/> */}

                <TouchableOpacity
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    closeModal();
                  }}>
                  <Text style={{ justifyContent: 'center', fontWeight: 'bold' }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </CustomModal>
          </View>

          <View style={{ borderRightWidth: 1, borderColor: 'grey', height: 40, alignSelf: 'center', marginLeft: 15 }}></View>

          {/* CustomInputField */}
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CustomInputField
              placeholder="Mobile Number"
              isFirstField={true}
              maxLength={10}
              keyboardType="numeric"
              textAlign="left"
              errorMessage={validationError}
              value={mobileNo}
              onChangeText={handleNumberChange}
              onSubmitEditing={handleNextButtonPress}
              returnKeyType="done"
            />
          </View>
        </View>

        {/* Custom Button */}
        <View style={{ marginTop: '5%' }}>
          <CustomBtn
            btnLabel='Submit'
            Press={handleNextButtonPress}
            textColor={deepskyblue}
          />
        </View>
      </View>

    </View>
  );
};

export default RequestOTPScreen;

const styles = StyleSheet.create({});
