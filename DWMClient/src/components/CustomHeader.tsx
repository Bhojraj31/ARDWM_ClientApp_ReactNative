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
import { IconButton } from 'react-native-paper';
import { deepskyblue } from '../assets/constants/ColorConstants';

interface CustomHeaderProps {
    navigation: any;
    title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#020d15' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconButton icon="chevron-left" size={30} iconColor={deepskyblue} />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                {title}
            </Text>
        </View>
    );
};

export default CustomHeader;
