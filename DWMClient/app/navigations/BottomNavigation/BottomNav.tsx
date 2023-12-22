/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- BottomNav
 * @Type:- Functional Component
 * @Role:- For showing BottomNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconButton } from 'react-native-paper';
import Strategy from '../../screens/dashboardFlow/BottomNavScreen/Strategy';
import Dashboard from '../../screens/dashboardFlow/BottomNavScreen/Dashboard';
import Messages from '../../screens/dashboardFlow/BottomNavScreen/Messages';
import { useTheme } from '../../theme/ThemeProvider';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const Bottom = createBottomTabNavigator();
// ------ React Native Funcational Export Component with styles------
const BottomNav = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { background, activeTabTintColor, InactiveTintColor } = theme.colors;
  // ------ Used ActiveColor and InactiveColor Here ------
  const ActiveColor = activeTabTintColor;
  const InactiveColor = InactiveTintColor;
  const accessWealthStrategyData = useSelector((state: RootState) => state.wealthstrategyData.responseObject);
  // ------ Return react native component here ------
  return (
    // ------ Bottom Tab navigation here ------
    <Bottom.Navigator
      initialRouteName='Main'
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: background,
          padding: 8
        },
        tabBarActiveTintColor: activeTabTintColor,
        tabBarInactiveTintColor: InactiveTintColor
      }}>
      {/* ------ Bottom Tab navigation Screens here ------ */}
      <Bottom.Screen
        name='Strategy'
        component={Strategy}
        options={({ navigation }) => ({
          header: () => (
            <CustomDrawerHeader navigation={navigation} showRefresh={false} title={accessWealthStrategyData.wealthStrategyName} />
          ),
          tabBarLabel: 'Strategy',
          tabBarIcon: ({ focused, color }) => (
            <IconButton icon="chess-knight" size={25} iconColor={focused ? ActiveColor : InactiveColor} />
          ),
        })}
      />
      <Bottom.Screen
        name='Main'
        component={Dashboard}
        options={({ navigation }) => ({
          header: () => (
            <CustomDrawerHeader navigation={navigation} title={accessWealthStrategyData.wealthStrategyName} />
          ),
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ focused, color }) => (
            <IconButton icon="speedometer" size={25} iconColor={focused ? ActiveColor : InactiveColor} />
          ),
        })}
      />
      <Bottom.Screen
        name='Messages'
        component={Messages}
        options={({ navigation }) => ({
          header: () => (
            <CustomDrawerHeader navigation={navigation} showRefresh={false} showFamilyButton={false} title={accessWealthStrategyData.wealthStrategyName} />
          ),
          tabBarLabel: 'Messages',
          tabBarIcon: ({ focused, color }) => (
            <IconButton icon="wechat" size={25} iconColor={focused ? ActiveColor : InactiveColor} />
          ),
        })}
      />
    </Bottom.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})