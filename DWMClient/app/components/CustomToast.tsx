import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const CustomToast = () => {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

    const ShowToast = () => {
        // Pass necessary data to the next screen through navigation params
        // navigation.navigate('Welcome', { showToast: true });
        Toast.show({
            type: "success",
            text1: "Toast Message",
            position: 'bottom'
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CustomToast</Text>
            <Button title='ShowToast' onPress={ShowToast} />
        </View>
    )
}

export default CustomToast

const styles = StyleSheet.create({})