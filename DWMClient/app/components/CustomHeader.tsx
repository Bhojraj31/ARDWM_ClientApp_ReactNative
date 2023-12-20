/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom Header
 * @Type:- Functional Component
 * @Role:- For showing Custom Header
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useTheme } from '../theme/ThemeProvider';
// ------ CustomHeaderProps for passing values's to the child ------
interface CustomHeaderProps {
    navigation: any;
    title: string;
}
// ------ React Native Funcational Export Component with styles------
const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { label, button, background } = theme.colors;
    return (
        // ------ Parent View Of this component  ------
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: background }}>
            {/* ------ Back Button here  ------ */}
            <TouchableOpacity style={{ flex: .1 }} onPress={() => navigation.goBack()}>
            <Image source={require('../assets/images/Arrow.png')} style={{ width: 30, height: 25, tintColor: button }} />
            </TouchableOpacity>
            {/* ------ title for Custom Heder  ------ */}
            <View style={{ flex: .8, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: label, fontWeight: '400', fontSize: 18 }}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

export default CustomHeader;
