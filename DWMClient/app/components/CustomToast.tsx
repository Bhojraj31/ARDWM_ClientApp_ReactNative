import { StyleSheet, Text, View, Button } from 'react-native'
import React,{useEffect} from 'react'
import Toast from 'react-native-toast-message'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useToast } from "react-native-toast-notifications";

const CustomToast = () => {
    // const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

    const toast = useToast();

    useEffect(() => {
        toast.show("Hello World");
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CustomToast</Text>
            <Button title='ShowToast' />
        </View>
    )
}

export default CustomToast

const styles = StyleSheet.create({})