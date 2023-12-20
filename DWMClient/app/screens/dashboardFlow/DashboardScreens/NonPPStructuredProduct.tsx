/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DashboardScreen5
 * @Type:- Functional Component
 * @Role:- For showing DashboardScreen5
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'

const NonPPStructuredProduct = () => {
    return (
        <CustomCard
            title='Non-PP Structured Product'
            currentValue='-'
            investment='-'
            returnRate='-'
            returnRate1='-'
            EMP=''
            date='15 Aug 2023'
        />
    )
}

export default NonPPStructuredProduct

const styles = StyleSheet.create({})