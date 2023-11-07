/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- App Navigation
* @Type:- Functional Component
* @Role:- Stack Navigation 
* @Sprint:- Sprint 1.0 -- Jira ID DRN-6
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import Home from '../screens/Home';
import UserDetail from '../screens/authentication/UserDetail';
import CreatePin from '../screens/authentication/CreatePin';
import EnterPin from '../screens/authentication/EnterPin';
import CustomHeader from '../components/CustomHeader';
import ForgetPin from '../screens/authentication/ForgetPin';
import RequestOTPScreen from '../screens/authentication/RequestOTPScreen';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/authentication/WelcomeScreen';
import ValidateOtpScreen from '../screens/authentication/ValidateOtpScreen';
import RMLeadMapScreen from '../screens/authentication/RMLeadMapScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='RequestOTP'
                    component={RequestOTPScreen}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='ValidateOTP'
                    component={ValidateOtpScreen}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='UserDetail'
                    component={UserDetail}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='CreatePin'
                    component={CreatePin}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='RMLeadMap'
                    component={RMLeadMapScreen}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='EnterPin'
                    component={EnterPin}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='ForgetPin'
                    component={ForgetPin}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator

const styles = StyleSheet.create({})