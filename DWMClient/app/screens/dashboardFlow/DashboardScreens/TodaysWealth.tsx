/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DashboardScreen2
 * @Type:- Functional Component
 * @Role:- For showing DashboardScreen2
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'
import CustomCircularSlider from '../../../components/CustomCircularSlider'

const TodaysWealth = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .75 }}>
                <CustomCard
                    title='Todays Wealth'
                    currentValue='73.6L'
                    investment='52.25L'
                    returnRate='36.62L'
                    returnRate1='(11.0%p.a)'
                    EMP='+ Equity Market Protection :-'
                    date='15 Aug 2023'
                />
            </View>
            <View style={{ alignSelf: 'center' }}>
                <CustomCircularSlider />
            </View>
        </View>
    )
}

export default TodaysWealth

const styles = StyleSheet.create({})