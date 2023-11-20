import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { background, deepskyblue } from '../../assets/constants/ColorConstants'

const Dashboard = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
            <Text style={{fontSize:20, fontWeight:'800', color:deepskyblue }}>Welcome To Dashboard</Text>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})