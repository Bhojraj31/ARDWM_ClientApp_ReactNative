/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Splash Screen
 * @Type:- Functional Component
 * @Role:- App first screen
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-1
 * @Created by:- Yashwant Lohar
 * @Created on:-  11-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Image, View } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useLazyGetTokenQuery } from '../services/TokenService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setToken } from '../slices/tokenSlice';
import { apiErrorType, apiType, apiTypes } from '../assets/constants/ApiConstants';
import { useTheme } from '../theme/ThemeProvider';

const SplashScreen: React.FC = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { background } = theme.colors;
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
      navigation.navigate('EnterPin')
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);

  useEffect(() => {
    if (getTokenApiResponse.isSuccess) {
      console.log('Token API Response:', getTokenApiResponse);
      const gatedToken = getTokenApiResponse.data.responseObject;
      dispatch(setToken(gatedToken));
      console.log('Token API Response:', getTokenApiResponse);
    } else {
      console.log('Token API Response fail:', getTokenApiResponse);
    }
  }, [getTokenApiResponse]);

  return (
    <View style={{ backgroundColor: background, height: '100%' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/ARLogo_W.png')}
          style={styles.logo}
        />
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