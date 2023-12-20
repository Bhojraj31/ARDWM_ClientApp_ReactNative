/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- DashboardScreen6
 * @Type:- Functional Component
 * @Role:- For showing DashboardScreen6
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'
import { Card } from 'react-native-paper'
import { useTheme } from '../../../theme/ThemeProvider'

const UnutilizedFunds = () => {
    const { theme } = useTheme();
    const { button, label, text, cardBackground, background } = theme.colors;
    return (
        <View style={{ flex: 1, backgroundColor: background }}>
            {/* Card here */}
            <Card style={{ backgroundColor: cardBackground, borderRadius: 10 }}>
                {/* 1-Row */}
                <Card.Content style={{ alignItems: 'center' }}>
                    <Text style={{ color: label, fontSize: 18 }}>Unutilized Funds</Text>
                    <Text style={{ color: label, fontSize: 28, marginTop: 10 }}>__</Text>
                    <Text style={{ color: text, fontSize: 17 }}></Text>
                </Card.Content>

                {/* 2-Row */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                        <Text style={{ color: label, fontSize: 18 }}></Text>
                    </View>
                    <TouchableOpacity  style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ color: button, fontSize: 18 }}></Text>
                        <Text style={{ color: button, fontSize: 14 }}></Text>
                    </TouchableOpacity>
                </Card.Content>

                {/* 3-Row */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                        <Text style={{ color: text, fontSize: 18 }}></Text>
                    </View>
                    <TouchableOpacity style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ color: text, fontSize: 18 }}></Text>
                    </TouchableOpacity>
                </Card.Content>

                {/* 4-Row */}
                <Card.Content style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <TouchableOpacity>
                        <Text style={{ color: button, fontSize: 18 }}></Text>
                    </TouchableOpacity>
                </Card.Content>

                {/* 5-Row */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 2 }}>
                    <TouchableOpacity>
                        <Text style={{ color: button, fontSize: 15 }}></Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    )
}

export default UnutilizedFunds

const styles = StyleSheet.create({})