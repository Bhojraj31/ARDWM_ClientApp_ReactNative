import { StyleSheet, Text, Image, View, Button, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { background, deepskyblue } from '../assets/constants/ColorConstants';
import CustomBtn from '../components/CustomBtn';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const requestOTP = () => {
    navigation.navigate('RequestOTP')
  }

  return (
    <View style={{ backgroundColor: background, height: '100%' }}>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '30%',
        }}>
        <Image
          style={{ width: 230, height: 70 }}
          source={require('../../assets/images/ARLogo_W.png')} // Replace with your image path
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
          }}>
          Grow Your Wealth
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '3%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          100x
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
          }}>
          With Equity Market Protection
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '10%',
        }}>

        {/* <TouchableOpacity onPress={requestOTP}>
        <Text
          style={{
            color: '#5EB0DE',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Let's See How
        </Text>
        </TouchableOpacity> */}

        {/* Custom Btn here  */}
        <CustomBtn
          textColor={deepskyblue}
          btnLabel="Let's See How"
          Press={requestOTP}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '70%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginBottom: 15
          }}>
          Already have an account?
        </Text>
        {/* <TouchableOpacity onPress={requestOTP}>
          <Text
            style={{
              color: '#5EB0DE',
              fontSize: 15,
              justifyContent: 'center',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity> */}

        {/* Custom Btn here */}
        <View style={{alignItems:'center'}}>
          <CustomBtn
            textColor={deepskyblue}
            btnLabel='Login'
            Press={requestOTP}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
