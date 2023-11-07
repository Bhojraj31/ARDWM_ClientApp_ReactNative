/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Custom Header
* @Type:- Functional Component
* @Role:- Reuable Custom Header
* @Sprint:- Sprint 1.0 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { background, deepskyblue } from '../assets/constants/ColorConstants';

interface CustomHeaderProps {
    navigation: any;
    title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: background, padding: 4 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/Arrow.png')} style={{ width: 30, height: 25, tintColor: deepskyblue }} />
            </TouchableOpacity>
            <View style={{width:350,justifyContent:'center', alignItems:'center'}}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

export default CustomHeader;
