import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { deepskyblue } from '../assets/constants/constants';

interface CustomHeaderProps {
    navigation: any;
    title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#020d15' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconButton icon="chevron-left" size={30} iconColor={deepskyblue}  />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                {title}
            </Text>
        </View>
    );
};

export default CustomHeader;
