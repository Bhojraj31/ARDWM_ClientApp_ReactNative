import { StyleSheet, Text, Image, View, Button, Touchable, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { background, deepskyblue } from '../../assets/constants/ColorConstants';
import CustomBtn from '../../components/CustomBtn';
import Toast from 'react-native-toast-message';

// interface RouteParams {
//   showToast?: boolean;
// }

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  // const route = useRoute();
  // const { showToast } = route.params as RouteParams;

  // useEffect(() => {
  //   if (showToast) {
  //     // Show toast if showToast is true
  //     Toast.show({
  //       type: "success",
  //       text1: "Toast Message",
  //       position: 'bottom'
  //     });
  //   }
  // }, [showToast]);

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
          marginBottom: 10
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginBottom: 10
          }}>
          Already have an account?
        </Text>


        {/* Custom Btn here */}
        <View style={{ alignItems: 'center', marginTop: 'auto', marginBottom: 30 }}>
          <CustomBtn
            textColor={deepskyblue}
            btnLabel='Login'
            Press={requestOTP}
          />
        </View>
      </View>

      <Toast />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
