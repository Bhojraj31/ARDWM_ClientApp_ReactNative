import React, { useState } from 'react';
import { TextInput, TextInputProps, Text } from 'react-native';

interface FieldProps extends TextInputProps {
    placeholder: string;
    validationRegex: RegExp;
    errorMessage: string; 
    textAlign?: 'left' | 'center' | 'right';
}

const InputField: React.FC<FieldProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleInputChange = (text: string) => {
        const { validationRegex } = props;

        if (validationRegex.test(text) || text === '') {
            setInputValue(text);
            setErrorMessage('');
        } else {
            setErrorMessage(props.errorMessage);
        }
    };

    return (
        <React.Fragment>
            <TextInput
                {...props}
                value={inputValue}
                onChangeText={handleInputChange}
                style={{
                    color: '#D3D3D3',
                    paddingHorizontal: 10,
                    fontSize: 19,
                    marginVertical: 10,
                    textAlign: props.textAlign || 'center',
                }}
                placeholderTextColor="grey"
            />
            {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        </React.Fragment>
    );
};

export default InputField;
