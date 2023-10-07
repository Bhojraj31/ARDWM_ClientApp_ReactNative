import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useLoginMutation } from '../service/AuthService'

const Test = () => {
    
    const [loginApiRequest, loginApiResponse] = useLoginMutation();
    function _login() {
        loginApiRequest({
            email: "Bs31@mail.com",
            password: "Bss",
        });
        console.log(loginApiResponse);
    }
    useEffect(() => {
        // if (loginApiResponse.isSuccess) {
        // }
        // if (loginApiResponse.isError) {
        // }
    }, [loginApiResponse])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Button title='Login' onPress={_login} />
        </View>
    )
}

export default Test

const styles = StyleSheet.create({})