// CustomToast.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface CustomToastProps {
    message: string;
    backgroundColor: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ message, backgroundColor }) => (
    <View style={{ backgroundColor, padding: 10 }}>
        <Text style={{ color: 'white' }}>{message}</Text>
    </View>
);

export default CustomToast;
