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
import { Button, Text } from 'react-native-paper';

type Props = {
    btnLabel: string,
    textColor: string,
    Press: () => void
    disabled?: boolean; 
}

export default function Btn({ btnLabel, textColor, Press , disabled}: Props) {
    return (
        <Button
            onPress={Press}
            style={{
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                paddingVertical: 5,
                marginVertical: 10,
            }}
            disabled={disabled}
        >
            <Text style={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>
        </Button>
    );
}
