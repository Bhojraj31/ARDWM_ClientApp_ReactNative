/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Profile
 * @Type:- Functional Component
 * @Role:- For showing Profile
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../theme/ThemeProvider';

const Registration = () => {
    const { theme } = useTheme();
    const { background, label, } = theme.colors;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: label }} >Registration</Text>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({})