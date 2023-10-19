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

// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// // import CustomHeader from '../../components/CustomComponents/CustomHeader';
// import CustomTextInput from '../../components/CustomComponents/CustomTextInput';
// import {Formik} from 'formik';
// import * as yup from 'yup';
// import {useTypedDispatch, useTypedSelector} from '../../store';
// import {useLazyGetCountryApiQuery} from '../../services/GetCountryService';
// import {apiType, apiTypes} from '../../assets/constants/ApiConstants';
// import { setCountry } from '../../slices/CountrySlice';
// import { NavigationProp, useNavigation } from '@react-navigation/native';

// const IIN_No = ['IIN_No 1', 'IIN_No 2', 'IIN_No 3', 'IIN_No 4', 'IIN_No 5'];
// const data = [
//   {id: 1, name: 'Item 1', label: '101'},
//   {id: 2, name: 'Item 2', label: '102'},
//   {id: 3, name: 'Item 5', label: '103'},
//   {id: 4, name: 'Item 1', label: '104'},
//   {id: 5, name: 'Item 2', label: '105'},
//   {id: 6, name: 'Item 8', label: '106'},
//   {id: 7, name: 'Item 1', label: '107'},
//   {id: 8, name: 'Render Item 2', label: '108'},
//   {id: 9, name: 'Item 5', label: '110'},
// ];

// type ItemProps = {title: string};
// interface Item {
//   id: number;
//   name: string;
//   label: string;
// }

// interface Props {
//   data: Item[];
// }

// const Item = ({title}: ItemProps) => (
//   <View style={styles.item}>
//     <TouchableOpacity>
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   </View>
// );
// const RequestOTPScreen: React.FC = () => {
//   const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
//   const [searchText, setSearchText] = useState('');
//   const [selectedValue, setSelectedValue] = useState('+91');
//   const [isOpen, setIsOpen] = useState(false);

//   // Get Country Api....
//   const dispatch = useTypedDispatch();
//   const GetStr = useTypedSelector(state => state.otp);
//   console.log('store data', JSON.stringify(GetStr.data));

//   const [getCountryApiRequest, getCountryApiResponse] =
//     useLazyGetCountryApiQuery();

//   useEffect(() => {
//     apiType: apiTypes.get;
//     getCountryApiRequest({});
//   }, []);

//   useEffect(() => {
//     if (getCountryApiResponse.isSuccess) {
//       console.log('Country API Response:', getCountryApiResponse);
//       dispatch(setCountry(getCountryApiResponse));
//     } else {
//       console.log('Country Api response fail');
//     }
//   }, [getCountryApiResponse]);
//   // Get Country Api......

//   const handleValueChange = (option: any) => {
//     setSelectedValue(option.label);
//   };

//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchText.toLowerCase()),
//   );

//   const renderItem = ({item}: {item: Item}) => (
//     <TouchableOpacity
//       onPress={() => {
//         setSelectedValue(item.name);
//         console.log('show item', item.id);
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           backgroundColor: 'white',
//           width: '67%',
//           marginHorizontal: 60,
//         }}>
//         <Text style={styles.item}>{item.name}</Text>
//         <Text style={styles.item}>{item.label}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const toogle = () => {
//     setIsOpen(isOpen => !isOpen);
//   };

//   const validationSchema = yup.object().shape({
//     mobileNumber: yup
//       .string()
//       .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid mobile number format')
//       .required('Mobile number is required'),
//   });
//   const handleSubmit = () => {
//     // Handle form submission here, e.g., send the mobile number to the server.
//     // console.log('Mobile Number:', values.mobileNumber);
//     navigation.navigate('ValidateOTP')
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{mobileNumber: ''}}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}>
//         {({handleChange,  values, errors, touched}) => (
//           <View style={{flex: 1}}>
//             <View>
//               {/* <CustomHeader title="Back" /> */}
//             </View>

//             <View style={{backgroundColor: '#030f1a', height: '100%'}}>
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignSelf: 'center',
//                   marginTop: 40,
//                 }}>
//                 <Text
//                   style={{
//                     color: 'lightblue',
//                     fontSize: 20,
//                     textAlign: 'center',
//                   }}>
//                   Please enter your 10-digit{'\n'}
//                   mobile number
//                 </Text>
//               </View>

//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   marginTop: 20,
//                   marginBottom: 20,
//                 }}>
//                 <TouchableOpacity onPress={toogle}>
//                   <Text
//                     style={{
//                       color: 'white',
//                       marginRight: 20,
//                       justifyContent: 'center',
//                       alignSelf: 'center',
//                       marginLeft: 10,
//                       marginTop: 13,
//                     }}>
//                     {selectedValue}
//                   </Text>
//                 </TouchableOpacity>

//                 <CustomTextInput
//                   onHandleText={handleChange('mobileNumber')}
//                   value={values.mobileNumber}
//                   minLength={10}
//                   maxLength={10}
//                   placeholderTextColor="gray"
//                   cursorColor="lightblue"
//                   editable={true}
//                   placeHolder="Mobile Number"
//                   keyboardType="numeric"
//                   inputContainer={{
//                     justifyContent: 'center',
//                     alignSelf: 'center',
//                     borderWidth: 0,
//                     padding: 0,
//                     backgroundColor: '#020d15',
//                     width: '30%',
//                   }}
//                 />
//               </View>

//               {isOpen && (
//                 <View style={{height: '40%'}}>
//                   <View style={{width: '67%'}}>
//                     <TextInput
//                       style={{
//                         backgroundColor: 'white',
//                         width: '100%',
//                         marginHorizontal: 60,
//                         paddingLeft: 10,
//                         margin: 5,
//                       }}
//                       placeholder="Search"
//                       onChangeText={text => setSearchText(text)}
//                       value={searchText}
//                     />
//                   </View>

//                   <FlatList
//                     style={{width: '100%'}}
//                     data={filteredData}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id.toString()}
//                   />
//                 </View>
//               )}

//               {/* { isvisible: <View />: null} */}
//               <View style={{justifyContent: 'center', alignSelf: 'center'}}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     handleSubmit();
//                   }}>
//                   <Text
//                     style={{
//                       color: 'lightblue',
//                       fontWeight: 'bold',
//                       fontSize: 18,
//                     }}>
//                     Submit
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       </Formik>
//       <View>
//         <Text>{JSON.stringify(GetStr.data.status)}</Text>
//       </View>
//     </>
//   );
// };

// export default RequestOTPScreen;

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     padding: 10,
//     marginVertical: 0,
//     borderWidth: 0.1,
//     flex: 1,
//   },
//   title: {
//     fontSize: 15,
//     color: 'black',
//   },
// });


// bhojraj singh shekhawat
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CustomInputField from '../components/CustomInputField';
import { background } from '../assets/constants/ColorConstants';

const RequestOTPScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  const [number, setNumber] = useState('');
  const [validationError, setValidationError] = useState('');


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
      // navigate to next screen 
      navigation.navigate('ValidateOTP')
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
        <View style={{ flexDirection: 'row' }}>
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

export default RequestOTPScreen

const styles = StyleSheet.create({})