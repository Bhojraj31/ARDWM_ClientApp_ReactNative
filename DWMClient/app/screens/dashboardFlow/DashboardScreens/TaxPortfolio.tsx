/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DashboardScreen4
 * @Type:- Functional Component
 * @Role:- For showing DashboardScreen4
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'

const TaxPortfolio = () => {
    return (
        <CustomCard
            title='Tax Portfolio'
            currentValue='-'
            investment='-'
            returnRate='-'
            returnRate1='-'
            EMP=''
            date='15 Aug 2023'
        />
    )
}

export default TaxPortfolio

const styles = StyleSheet.create({})