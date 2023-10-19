/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Custom InputField
* @Type:- Functional Component
* @Role:- Reuable Custom InputField
* @Sprint:- Sprint 1.0 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import React from 'react';
import { TextInput, TextInputProps, Text } from 'react-native';

interface FieldProps extends TextInputProps {
    placeholder: string;
    errorMessage?: string; // Allow errorMessage to be optional
    textAlign?: 'left' | 'center' | 'right';
}

const CustomInputField: React.FC<FieldProps> = (props) => {
    return (
        <React.Fragment>
            <TextInput
                {...props}
                style={{
                    color: '#D3D3D3',
                    paddingHorizontal: 10,
                    fontSize: 19,
                    marginVertical: 10,
                    textAlign: props.textAlign || 'center',
                }}
                placeholderTextColor="grey"
            />
            {props.errorMessage && <Text style={{ color: 'red' }}>{props.errorMessage}</Text>}
        </React.Fragment>
    );
};

export default CustomInputField;
