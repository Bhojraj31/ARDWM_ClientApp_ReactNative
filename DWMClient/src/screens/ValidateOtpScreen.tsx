/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:-  otp screen
 * @Type:- functional component
 * @Ver - 1.0
 * @Role:- Enter OPT screen
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-5
 * @Created by:- Yashwant Lohar
 * @Created on:-  07-Oct-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import CustomHeader from '../../components/CustomComponents/CustomHeader';
import CustomTextInput from '../../components/CustomComponents/CustomTextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
// import {useTypedDispatch, useTypedSelector} from '../../store';

const ValidateOtpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // OTP screen Api....
  // const dispatch = useTypedDispatch();
  // const GetStr = useTypedSelector(state => state.getApi);
  // console.log('store data', JSON.stringify(GetStr.data));

  // const [getOtpApiRequest, getOtpApiRequest] = ();

  // useEffect(() => {
  //   apiType = apiTypes.get;
  //   getOtpApiRequest({});
  // }, []);

  // useEffect(() => {
  //   if (getOtpApiRequest.isSuccess) {
  //     console.log('Country API Response:', getOtpApiRequest);
  //     dispatch(setGetApi(getOtpApiRequest));
  //   } else {
  //     console.log('Country Api response fail');
  //   }
  // }, [getOtpApiRequest]);
  // OTP screen Api......

  const validationSchema = yup.object().shape({
    otp: yup
      .string()
      .min(6, 'OTP must be 6 characters')
      .max(6, 'OTP must be 6 characters')
      .required('OTP is required'),
  });
  const handleSubmit = () => {
    navigation.navigate('UserDetail')
  };

  return (
    <>
      <Formik
        initialValues={{otp: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({handleChange,  values, errors, touched}) => (
          <View style={{flex: 1}}>
            <View>
              {/* <CustomHeader title="" /> */}
            </View>
            <View style={{backgroundColor: '#030f1a', height: '100%'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}>
                <Text
                  style={{
                    color: 'lightblue',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  Please enter the{'\n'}
                  6-digit OTP
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <CustomTextInput
                  onHandleText={handleChange('otp')}
                  value={values.otp}
                  minLength={6}
                  maxLength={6}
                  secureText={true}
                  placeholderTextColor="gray"
                  cursorColor="lightblue"
                  editable={true}
                  placeHolder="Enter OTP"
                  keyboardType="numeric"
                  inputContainer={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: '100%',
                    margin: '10%',
                    borderWidth: 0,
                    padding: 0,
                    backgroundColor: '#020d15',
                  }}
                />
              </View>
              {touched.otp && errors.otp && (
                <Text style={{color: 'red'}}>{errors.otp}</Text>
              )}
              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text
                    style={{
                      color: 'lightblue',
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

export default ValidateOtpScreen;

const styles = StyleSheet.create({});
