/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:-  RN and Client map screen
 * @Type:- functional component
 * @Ver - 1.0
 * @Role:- select one textinput form partner code and meeting id
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-8
 * @Created by:- Yashwant Lohar
 * @Created on:-  11-Oct-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CustomTextInput from '../../components/CustomComponents/CustomTextInput';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const RMLeadMapScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  return (
    <>
      <View>
        <View style={{backgroundColor: '#030f1a', height: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '10%',
              marginBottom: '10%',
            }}>
            <Text style={{color: 'lightblue', fontSize: 20}}>
              Please Enter Meeting ID/Parter Code
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <CustomTextInput
              value=""
              minLength={4}
              maxLength={4}
              placeholderTextColor="gray"
              cursorColor="lightblue"
              editable={true}
              placeHolder="Meeting ID"
              keyboardType="numeric"
              inputContainer={{
                justifyContent: 'center',
                alignSelf: 'center',
                width: '100%',
                margin: '0%',
                borderWidth: 0,
                padding: 0,
                backgroundColor: '#020d15',
              }}
              onHandleText={newText => console.log('function called', newText)}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white', margin: '10%', fontSize: 20}}>
              OR
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <CustomTextInput
              value=""
              minLength={6}
              maxLength={6}
              placeholderTextColor="gray"
              cursorColor="lightblue"
              editable={true}
              placeHolder="Partner Code"
              keyboardType="numeric"
              inputContainer={{
                justifyContent: 'center',
                alignSelf: 'center',
                width: '100%',
                margin: '0%',
                borderWidth: 0,
                padding: 0,
                backgroundColor: '#020d15',
              }}
              onHandleText={newText => console.log('function called', newText)}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default RMLeadMapScreen;

const styles = StyleSheet.create({});
