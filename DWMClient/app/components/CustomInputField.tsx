// CustomInputField.tsx
import React, { useEffect, useRef } from 'react';
import { TextInput, TextInputProps, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface FieldProps extends TextInputProps {
    placeholder: string;
    errorMessage?: string;
    width?: number;
    isFirstField?: boolean; // Define a prop to mark as the first field
}

const CustomInputField: React.FC<FieldProps> = props => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { text } = theme.colors;
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
                        color: text,
                        width: props.width,
                        fontSize: 17,
                        paddingLeft:10,
                        marginVertical: 5,
                    }}
                    textAlignVertical='center'
                    placeholderTextColor={text}
                />
                {props.errorMessage && <Text style={{ color: 'red' }}>{props.errorMessage}</Text>}
        </React.Fragment>
    );
};

export default CustomInputField;
