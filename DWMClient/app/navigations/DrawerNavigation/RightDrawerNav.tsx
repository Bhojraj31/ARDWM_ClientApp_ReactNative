/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DrawerNav
 * @Type:- Functional Component
 * @Role:- For showing DrawerNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  04-12-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '../../theme/ThemeProvider';
import CustomRightDrawer from '../../components/CustomRightDrawer';
import DrawerNav from './DraweNav';


const RightDrawer = createDrawerNavigator();

// ------ React Native Funcational Export Component with styles------
function RightDrawerNav() {
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { text, drawerBackground } = theme.colors;
    
    // ------ Return react native component here ------
    return (
        // ------ RightDrawer navigation here ------
        <RightDrawer.Navigator
            id='RightDrawer'
            drawerContent={props => <CustomRightDrawer {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerType: "slide",
                drawerActiveTintColor: drawerBackground,
                drawerLabelStyle: {
                    fontSize: 16,
                    color: text,
                }
            }}
        >
            {/* ------ RightDrawer navigation Screens here ------ */}
            <RightDrawer.Screen
                name=' '
                component={DrawerNav}
                options={{
                    headerShown: false
                }}
            />
        </RightDrawer.Navigator>
    )
}

export default RightDrawerNav
