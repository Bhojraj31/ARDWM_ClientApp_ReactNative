import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'

const CustomToast = () => {
    
    const ShowToast = () => {
        Toast.show({
            type:"success",
            text1:"Toast Message",
            position:'bottom'
        })
    }
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>CustomToast</Text>
            <Button title='ShowToast' onPress={ShowToast}/>
            {/* <Toast /> */}
        </View>
    )
}

export default CustomToast

const styles = StyleSheet.create({})