import { StyleSheet, Image, View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../slices/TokenSlice';
import { RootState } from '../store';
import { useLazyGetTokenQuery } from '../service/TokenService';
import { apiType, apiTypes } from '../assets/constants/ApiConstants';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
  const [getTokenApiRequest, getTokenApiResponse] = useLazyGetTokenQuery();
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.token.responseObject);

  useEffect(() => {
    apiType.value = apiTypes.token
    getTokenApiRequest({});
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      // Replace 'Home' with the name of your main component or the component you want to navigate to after the splash screen.
      // You can use React Navigation for navigation.
      navigation.navigate('UserDetail')
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);

  useEffect(() => {
    if (getTokenApiResponse.isSuccess) {
      console.log('Token API Response:', getTokenApiResponse);
      const gatedToken = getTokenApiResponse.data.responseObject;
      dispatch(setToken(gatedToken));
      console.log('Token API Response:', getTokenApiResponse);
    }
  }, [getTokenApiResponse]);

  return (
    <View style={{ backgroundColor: '#030f1a', height: '100%' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/ARLogo_W.png')}
          style={styles.logo}
        />
        {
          accessToken && (
            <Text style={{ color: 'grey', fontSize: 14 }}>
              Access Token: {accessToken}
            </Text>
          )
        }
      </View>
    </View>
  );
};


export default SplashScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
  },
  logo: {
    width: 230,
    height: 70,
  },
});

