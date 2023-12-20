/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DashboardScreen3
 * @Type:- Functional Component
 * @Role:- For showing DashboardScreen3
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'

const ShortTermPortfolio = () => {
    return (
        <CustomCard
            title='Short Term Portfolio'
            currentValue='6.61L'
            investment='6.04L'
            returnRate='72.22K'
            returnRate1='(5.56%p.a)'
            EMP=''
            date='15 Aug 2023'
        />
    )
}

export default ShortTermPortfolio

const styles = StyleSheet.create({})