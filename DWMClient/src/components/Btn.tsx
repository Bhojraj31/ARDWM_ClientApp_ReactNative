import React from 'react';
import { Button, Text } from 'react-native-paper';

type Props = {
    btnLabel: string,
    textColor: string,
    Press: () => void
    disabled?: boolean; // Add a disabled prop
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
