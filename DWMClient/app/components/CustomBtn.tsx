/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Custom Button
* @Type:- Functional Component
* @Role:- Reuable Custom Button
* @Sprint:- Sprint 1.0 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/


import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
    btnLabel: string,
    textColor: string,
    Press: () => void
    disabled?: boolean;
}

export default function CustomBtn({ btnLabel, textColor, Press, disabled }: Props) {
    return (
        <TouchableOpacity onPress={Press}>
            <Text style={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
}
