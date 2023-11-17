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

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import React, {useState, SetStateAction, useEffect} from 'react';
import CustomInputField from '../../components/CustomInputField';
import {background, deepskyblue} from '../../assets/constants/ColorConstants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCreatePinMutation} from '../../services/AddLeadCommonService';
import {
  apiErrorType,
  apiResStatus,
  apiType,
  apiTypes,
} from '../../assets/constants/ApiConstants';
import {useToast} from 'react-native-toast-notifications';
import CustomBtn from '../../components/CustomBtn';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomModal from '../../components/CustomModal';
import {useLazyCountryQuery} from '../../services/CountryApiService';
import {useDispatch} from 'react-redux';
import {setCountry} from '../../slices/CountryApiSlice';
import {store} from '../../store';
import CountryList from '../../components/countryList';
import {onBoarding} from '../../slices/onBoardingSlice';
import CountryListDropDown from '../../components/CountryListDropDown';
import {date} from 'yup';

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

  const [countryId, setCountryId] = useState('645095');
  const [countryCode, setCountryCode] = useState('91');
  const [isCodeClick, setIsCodeClick] = useState(false);

  const [data, setData] = React.useState([{}]);

  var countryData: {country: string; code: string; id: string}[] = [];

  const openModal = () => {
    setIsCodeClick(!isCodeClick);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const validateMobNo = () => {
    var isTrue = false;
    if (countryCode === '91' && mobileNo.length === 10) {
      isTrue = true;
    } else if (
      countryCode !== '91' &&
      mobileNo.length > 3 &&
      mobileNo.length < 15
    ) {
      isTrue = true;
    }

    return isTrue;
  };

  const handleNumberChange = (text: string) => {
    const validationRegex = /^[0-9]*$/;
    if (countryCode === '91' && text.length <= 10) {
      console.log(validationRegex.test(text));

      if (validationRegex.test(text) && text.length <= 10) {
        setMobileNo(text);
        setValidationError('');
      } else {
        setValidationError('Please enter valid mobile number');
      }
    } else if (countryCode !== '91') {
      setMobileNo(text);
      if (validationRegex.test(text) && text.length <= 14 && text.length >= 4) {
        setValidationError('');
      } else {
        setValidationError('Please enter valid mobile number');
      }
    }
  };

  const handleNextButtonPress = async () => {
    // if (validationError === '' && mobileNo.length === 10) {
    if (validationError === '' && validateMobNo()) {
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
          countryCodeId: countryId,
          userId: '',
        };

        console.log(createNumberPayload);

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
            selectedCountryCode: ccId,
          };

          dispatch(onBoarding(data));

          navigation.navigate('ValidateOTP', {mobileNo, ccId});
        } else if (response.status === apiResStatus.FAIL) {
          toast.show(response.reasonCode);
        }
      } catch (error) {
        toast.show(apiErrorType.APP_MESSAGE);
      } finally {
        setLoading(false); // Stop loading indicator in case of success or failure
      }
    } else {
      setValidationError('Please enter valid mobile number');
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
    <View style={{flex: 1, alignItems: 'center', backgroundColor: background}}>
      {/* Conditional rendering for the Loader */}
      {loading && (
        <View style={StyleSheet.absoluteFill}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={deepskyblue} />
          </View>
        </View>
      )}

      {/* Main content */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: '10%',
        }}>
        {/* Tittle */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: 'grey'}}>
            Please enter your 10-digit
          </Text>
          <Text style={{fontSize: 18, color: 'grey'}}>mobile number</Text>
        </View>

        {/* Fields */}

        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={openModal}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                }}>{`+${countryCode}`}</Text>
            </TouchableOpacity>
          </View>

          {/* Country Drop Down */}
          {isCodeClick ? (
            <Modal transparent={true}>
              <CountryListDropDown
                sourceData={countryData}
                selectId={item => setCountryId(item)}
                selectedCode={item => {
                  setCountryCode(item);
                  setMobileNo('');
                }}
                setShow={val => setIsCodeClick(val)}
              />
            </Modal>
          ) : null}

          <View
            style={{
              borderRightWidth: 1,
              borderColor: 'grey',
              height: 40,
              alignSelf: 'center',
              marginLeft: 15,
            }}></View>

          {/* CustomInputField */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CustomInputField
              placeholder="Mobile Number"
              isFirstField={true}
              maxLength={14}
              keyboardType={
                Platform.OS === 'android' ? 'numeric' : 'number-pad'
              }
              value={mobileNo}
              onChangeText={handleNumberChange}
              onSubmitEditing={handleNextButtonPress}
              returnKeyType="done"
            />
          </View>
        </View>

        {/* shown error message here  */}
        {validationError ? (
          <Text style={{color: 'red'}}>{validationError}</Text>
        ) : null}
        {/* Custom Button */}
        <View style={{marginTop: '5%'}}>
          <CustomBtn
            btnLabel="Get OTP"
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
