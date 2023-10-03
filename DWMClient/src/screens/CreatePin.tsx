import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import Btn from '../components/Btn'
import { deepskyblue } from '../assets/constants/constants'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const CreatePin = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#030f1a' }}>

      <View style={{ flex: .9, justifyContent: 'space-evenly', alignItems: 'center' }}>

        {/* Tittle */}
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 20, color: 'grey' }}>
            Please create a 4-digit pin
          </Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>
            for quick access
          </Text>
        </View>

        {/* Fields */}
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <InputField placeholder="Enter PIN" secureTextEntry={true} maxLength={4} keyboardType='numeric' validationRegex={/^[0-9]+$/} errorMessage="Only numbers are allowed" />
        </View>

        <View >
          <Btn
            textColor={deepskyblue}
            btnLabel="Next"
            Press={() => {
              navigation.navigate('EnterPin')
            }}
          />
        </View>
        <View style={{ flex: .7 }}>
        </View>
      </View>
    </View>
  )
}

export default CreatePin

const styles = StyleSheet.create({})