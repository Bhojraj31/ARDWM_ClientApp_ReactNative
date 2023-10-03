import React from 'react';
import { Button, Text } from 'react-native-paper';

type Props = {
    btnLabel: string,
    textColor: string,
    Press: () => void
}

export default function Btn({ btnLabel, textColor, Press }: Props) {
    return (
        <Button
            onPress={Press}
            style={{
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                paddingVertical: 5,
                marginVertical: 10,
            }}>
            <Text style={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>
        </Button>
    );
}
