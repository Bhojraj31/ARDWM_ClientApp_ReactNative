import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { background, deepskyblue, lightwhite } from '../../assets/constants/ColorConstants';
import CustomBtn from '../../components/CustomBtn';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const requestOTP = () => {
    navigation.navigate('RequestOTP');
  };

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
            color: lightwhite,
            fontSize: 25,
          }}>
          Grow Your Wealth
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          100x
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            alignSelf: 'center',
          }}>
          With Equity Market Protection
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '5%',
        }}>

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
          marginTop: 'auto',
          marginBottom: 20
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginBottom: 5
          }}>
          Already have an account?
        </Text>


        {/* Custom Btn here */}
        <View style={{ alignItems: 'center', marginTop: 'auto' }}>
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