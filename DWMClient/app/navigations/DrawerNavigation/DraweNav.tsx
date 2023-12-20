/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DrawerNav
 * @Type:- Functional Component
 * @Role:- For showing DrawerNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React from 'react'
import BottomNav from '../BottomNavigation/BottomNav'
import Profile from '../../screens/dashboardFlow/DrawerNavScreen/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from '../../components/CustomHeader';
import Videos from '../../screens/dashboardFlow/DrawerNavScreen/Videos';
import Referral from '../../screens/dashboardFlow/DrawerNavScreen/Referral';
import Reports from '../../screens/dashboardFlow/DrawerNavScreen/Reports';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';
import CustomDrawer from '../../components/CustomDrawer';
import { useTheme } from '../../theme/ThemeProvider';


const Drawer = createDrawerNavigator();
// Empty Method For bottom tab 
const Empty = () => {
  return (
    <BottomNav />
  )
}
// ------ React Native Funcational Export Component with styles------
function DrawerNav() {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { text, drawerBackground } = theme.colors;
  // ------ Return react native component here ------
  return (
    // ------ Drawer navigation here ------
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: "slide",
        drawerActiveTintColor: drawerBackground,
        drawerLabelStyle: {
          fontSize: 16,
          color: text,
        }
      }}
    >
      {/* ------ Drawer navigation Screens here ------ */}
      <Drawer.Screen
        name='Dashboard'
        component={BottomNav}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name='Profile'
        component={Profile}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Profile" />
          ),
        })}
      />
      <Drawer.Screen
        name='Videos'
        component={Videos}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Videos" />
          ),
        })}
      />
      <Drawer.Screen
        name='Referral'
        component={Referral}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Referral" />
          ),
        })}
      />
      <Drawer.Screen
        name='Reports'
        component={Reports}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader navigation={navigation} title="Reports" />
          ),
        })}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNav
