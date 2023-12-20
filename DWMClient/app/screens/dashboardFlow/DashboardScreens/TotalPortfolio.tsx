/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DashboardScreen1
 * @Type:- Functional Component
 * @Role:- For showing DashboardScreen1
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'

const TotalPortfolio = () => {
    return (
        <CustomCard
            title='Total Portfolio'
            currentValue='80.21L'
            investment='58.29L'
            returnRate='37.34L'
            returnRate1='(10.81%p.a)'
            EMP='+ Equity Market Protection :-'
            date='15 Aug 2023'
        />
    )
}

export default TotalPortfolio

const styles = StyleSheet.create({})