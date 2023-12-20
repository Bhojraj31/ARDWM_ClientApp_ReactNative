/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom TopNav
 * @Type:- Functional Component
 * @Role:- For showing Custom TopNav
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useTheme } from '../../theme/ThemeProvider'
// ------ React Native Funcational Export Component with styles------
const CustomTopNav = () => {
    // ------ Navigation here  ------
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { text } = theme.colors;
    // ------ Return react native component here ------
    return (
        // ------ Parent View Of this component  ------
        <View style={[styles.row, { borderColor: text }]}>
            {/* ------ Portfolio Tab here ------ */}
            <TouchableOpacity onPress={() => { navigation.navigate('Portfolio') }} style={styles.tab}>
                <Image source={require('../../assets/images/logo.png')} style={{ width: 30, height: 23, tintColor: text }} />
                <Text style={{ color: text, fontSize: 12 }}>Portfolio</Text>
            </TouchableOpacity >

            {/* ------ Right Border here ------ */}
            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            {/* ------ Activity Tab here ------ */}
            <TouchableOpacity onPress={() => { navigation.navigate('Activity') }} style={styles.tab}>
                <Image source={require('../../assets/images/Activity.png')} style={{ width: 18, height: 17, tintColor: text, margin: 3 }} />
                <Text style={{ color: text, fontSize: 12 }} > Activity </Text>
            </TouchableOpacity >

            {/* ------ Right Border here ------ */}
            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            {/* ------ Transact Tab here ------ */}
            <TouchableOpacity onPress={() => { navigation.navigate('Transact') }} style={styles.tab}>
                <Image source={require('../../assets/images/Transact.png')} style={{ width: 25, height: 22, tintColor: text, }} />

                <Text style={{ color: text, fontSize: 12 }} > Transact </Text>
            </TouchableOpacity>

            {/* ------ Right Border here ------ */}
            <View style={{ borderRightWidth: 1, borderColor: text }}></View>

            {/* ------ Registration Tab here ------ */}
            <TouchableOpacity onPress={() => { navigation.navigate('Registration') }} style={styles.tab}>
                <Image source={require('../../assets/images/Registration.png')} style={{ width: 20, height: 22, tintColor: text }} />
                <Text style={{ color: text, fontSize: 12 }} > Registration </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTopNav

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopWidth: .5,
        borderBottomWidth: 1,
        paddingVertical:5
    },
    tab: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    }
})