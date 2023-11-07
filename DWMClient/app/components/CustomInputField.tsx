// CustomInputField.tsx
import React, { useEffect, useRef } from 'react';
import { TextInput, TextInputProps, Text } from 'react-native';

interface FieldProps extends TextInputProps {
    placeholder: string;
    errorMessage?: string;
    textAlign?: 'left' | 'center' | 'right';
    isFirstField?: boolean; // Define a prop to mark as the first field
}

const CustomInputField: React.FC<FieldProps> = (props) => {
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        if (props.isFirstField && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.isFirstField]);

    return (
        <React.Fragment>
            <TextInput
                {...props}
                ref={inputRef}
                style={{
                    color: '#D3D3D3',
                    paddingHorizontal: 8,
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
