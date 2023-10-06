import React from 'react';
import { TextInput, TextInputProps, Text } from 'react-native';

interface FieldProps extends TextInputProps {
    placeholder: string;
    errorMessage?: string; // Allow errorMessage to be optional
    textAlign?: 'left' | 'center' | 'right';
}

const InputField: React.FC<FieldProps> = (props) => {
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

export default InputField;
