import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import Btn from '../components/Btn'
import { deepskyblue } from '../assets/constants/constants'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const UserDetail = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#030f1a' }}>

      <View style={{ flex: .9, justifyContent: 'space-evenly', alignItems: 'center' }}>

        {/* Tittle */}
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>
            Do tell us a little
          </Text>
          <Text style={{ fontSize: 20, color: 'grey' }}>
            about yourself
          </Text>
        </View>

        {/* Fields */}
        <View>
          <InputField placeholder="First Name" validationRegex={/^[A-Za-z]+$/} errorMessage="Only alphabets are allowed"/>
          <InputField placeholder="Last Name" validationRegex={/^[A-Za-z]+$/} errorMessage="Only alphabets are allowed"/>
        </View>

        {/* Button */}
        <View >
          <Btn
            textColor={deepskyblue}
            btnLabel="Continue"
            Press={() => {
              navigation.navigate('CreatePin')
            }}
          />
        </View>

        {/* For space */}
        <View style={{ flex: .5 }}>
        </View>
      </View>
    </View>
  )
}

export default UserDetail

const styles = StyleSheet.create({})