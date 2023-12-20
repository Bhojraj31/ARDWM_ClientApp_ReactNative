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
import Dashboard from '../screens/authentication/Dashboard';
import RightDrawerNav from './DrawerNavigation/RightDrawerNav';
import DrawerNav from './DrawerNavigation/DraweNav';
import BottomNav from './BottomNavigation/BottomNav';
import Profile from '../screens/dashboardFlow/DrawerNavScreen/Profile';
import Portfolio from '../screens/dashboardFlow/TopNavScreen/Portfolio';
import Activity from '../screens/dashboardFlow/TopNavScreen/Activity';
import Transact from '../screens/dashboardFlow/TopNavScreen/Transact';
import Registration from '../screens/dashboardFlow/TopNavScreen/Registration';
import Invest from '../screens/dashboardFlow/TopNavScreen/TransactScreens/Invest';
import Switch from '../screens/dashboardFlow/TopNavScreen/TransactScreens/Switch';
import Withdraw from '../screens/dashboardFlow/TopNavScreen/TransactScreens/Withdraw';
import SwitchDetails from '../screens/dashboardFlow/TopNavScreen/TransactScreens/SwitchScreens/SwitchDetails';
import StrategyDetails from '../screens/dashboardFlow/BottomNavScreen/StrategyDetails';

const Stack = createNativeStackNavigator();
// ------ React Native Funcational Export Component with styles------
function AppNavigator() {
    // ------ Return react native component here ------
    return (
        // ------ NavigationContainer here ------
        <NavigationContainer>
            {/* ------ Stack navigation here ------ */}
            <Stack.Navigator initialRouteName='Splash' screenOptions={{
                animation: 'slide_from_right'
            }}>
                {/* ------ Stack navigation Screens here ------ */}
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
                {/* <Stack.Screen
                    name='Dashboard'
                    component={Dashboard}
                    options={{
                        headerShown: false
                    }}
                /> */}
                <Stack.Screen
                    name='RightDrawerNav'
                    component={RightDrawerNav}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='DrawerNav'
                    component={DrawerNav}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='BottomNav'
                    component={BottomNav}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Profile" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Portfolio'
                    component={Portfolio}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Portfolio" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Activity'
                    component={Activity}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Activity" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Transact'
                    component={Transact}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Transact" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Registration'
                    component={Registration}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Registration" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Invest'
                    component={Invest}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Invest" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Switch'
                    component={Switch}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Switch" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='Withdraw'
                    component={Withdraw}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Withdraw" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='SwitchDetails'
                    component={SwitchDetails}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="SwitchDetails" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='StrategyDetails'
                    component={StrategyDetails}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="Set Wealth Target" />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator

const styles = StyleSheet.create({})