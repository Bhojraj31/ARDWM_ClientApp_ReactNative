import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'

const ForgetPin = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#030f1a' }}>

            <View style={{ flex: .8, justifyContent: 'space-between', alignItems: 'center' }}>
                
                {/* Tittle */}
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, color: 'grey' }}>
                        Please enter your 10-digit
                    </Text>
                    <Text style={{ fontSize: 18, color: 'grey' }}>
                        mobile number
                    </Text>
                </View>

                {/* Fields */}
                <View style={{flexDirection:'row'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontSize:20}}>+91</Text>
                    </View>

                    <View style={{ borderRightWidth: 1, borderColor: 'grey',height:40, alignSelf:'center', marginLeft:20 }}></View>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <InputField placeholder="Mobile Number" maxLength={10} keyboardType='numeric' textAlign="left" validationRegex={/^[0-9]+$/} errorMessage="Only numbers are allowed" />
                    </View>
                </View>

                <View style={{ flex: .7 }}>
                </View>
            </View>
        </View>
    )
}

export default ForgetPin

const styles = StyleSheet.create({})