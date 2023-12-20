/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- CustomCard
 * @Type:- Functional Component
 * @Role:- For showing CustomCard on every dashboard screen
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native';
import { Card, Dialog, Portal } from 'react-native-paper';
import { useTheme } from '../theme/ThemeProvider';
import Tooltip from 'react-native-walkthrough-tooltip';

// ------ CardProps for passing values's to the child ------
type CustomCardProps = {
    title: string;
    currentValue: string;
    investment: string;
    returnRate: string;
    returnRate1: string;
    EMP: string;
    date: string;
}
// ------ React Native Funcational Export Component with styles ------
const CustomCard: React.FC<CustomCardProps> = ({ title, currentValue, investment, returnRate, returnRate1, EMP, date, }: CustomCardProps) => {
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { button, label, text, cardBackground, background } = theme.colors;
    // ------ State for EMP (Equity Market Protection) button ------
    const [empPress, setEmpPress] = useState(false);
    // ------ State for ToolTipVisible ------
    const [toolTipVisible, setToolTipVisible] = useState(false);
    // ------ State for ToolTipVisible1 ------
    const [toolTipVisible1, setToolTipVisible1] = useState(false);
    // ------ State for dialogVoxVisible ------
    const [dialogVoxVisible, setDialogBoxVisible] = useState(false);
    // ------ Function for showing Dialog Box  ------
    const showDialog = () => setDialogBoxVisible(true);
    // ------ Function for hide Dialog Box ------
    const hideDialog = () => setDialogBoxVisible(false);
    // ------ Return react native component here ------
    return (
        // ------ Parent View Of this component  ------
        <View style={{ flex: 1, backgroundColor: background }}>
            {/* ------ Card here ------ */}
            <Card style={{ backgroundColor: cardBackground, borderRadius: 10 }}>
                {/* ------ 1-Row ------ */}
                <Card.Content style={{ alignItems: 'center' }}>
                    {/* ------ Card's Tittle Here ----- */}
                    <Text style={{ color: label, fontSize: 18 }}>{title}</Text>
                    {/* ------ Card's currentValue Here ----- */}
                    <Text style={{ color: label, fontSize: 28, marginTop: 10 }}>{currentValue}</Text>
                    <Text style={{ color: text, fontSize: 17 }}>Current Value</Text>
                </Card.Content>

                {/* ------ 2-Row ------ */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <View style={{ width: '35%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 20 }}>
                        {/* ------ Card's investment Value Here ----- */}
                        <Text style={{ color: label, fontSize: 18 }}>{investment}</Text>
                    </View>
                    {/* ------ Used Tooltip Here on returnRate ----- */}
                    <Tooltip
                        isVisible={toolTipVisible}
                        contentStyle={{backgroundColor:cardBackground}}
                        content={
                            <View style={{ width: 250,padding: 10 }}>
                                <Text style={{ fontSize: 18, color: label, fontWeight: 'bold' }}>
                                    Returns
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginRight: 10 }}>
                                        <Text style={{ fontSize: 18, color: text, marginVertical: 10 }}>
                                            Unrealized Gain
                                        </Text>

                                        <Text style={{ fontSize: 18, color: text, marginVertical: 10 }}>
                                            Realized Gain
                                        </Text>

                                        <Text style={{ fontSize: 18, color: label, fontWeight: 'bold', marginVertical: 10 }}>
                                            Total Gain
                                        </Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 18, color: text, marginVertical: 10 }}>
                                            24.07L
                                        </Text>

                                        <Text style={{ fontSize: 18, color: text, marginVertical: 10 }}>
                                            15.27L
                                        </Text>

                                        <Text style={{ fontSize: 18, color: label, fontWeight: 'bold', marginVertical: 10 }}>
                                            39.34L
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        }
                        placement="bottom"
                        onClose={() => setToolTipVisible(false)}
                        showChildInTooltip={false}
                    >
                        <TouchableOpacity onPress={() => setToolTipVisible(true)}>
                            {/* ------ Card's returnRate Value Here ----- */}
                            <Text style={{ color: button, fontSize: 18 }}>{returnRate}</Text>
                        </TouchableOpacity>
                    </Tooltip>

                    {/* ------ Used Tooltip Here on returnRate in % ----- */}
                    <Tooltip
                        isVisible={toolTipVisible1}
                        contentStyle={{backgroundColor:cardBackground}}
                        content={
                            <View style={{ width: 250, padding: 6}}>
                                <Text style={{ fontSize: 15, color: label, textAlign: 'justify' }}>
                                    This IRR may not be reflective of
                                    expected long-term returns because
                                    it could be caused by recent large
                                    investment made or big price.
                                    movement in short term
                                </Text>
                            </View>
                        }
                        placement="bottom"
                        onClose={() => setToolTipVisible1(false)}
                        showChildInTooltip={false}
                    >
                        <TouchableOpacity onPress={() => setToolTipVisible1(true)}>
                            {/* ------ Card's returnRate in % Value Here ----- */}
                            <Text style={{ color: button, fontSize: 14 }}>{returnRate1}</Text>
                        </TouchableOpacity>
                    </Tooltip>
                </Card.Content>

                {/* ------ 3-Row ------ */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                        <Text style={{ color: text, fontSize: 18 }}>Investment</Text>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ color: text, fontSize: 18 }}>Return All Time</Text>
                    </View>
                </Card.Content>

                {/* ------ 4-Row ------ */}
                <Card.Content style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 2 }}>
                    {/* ------ Card's EMP(Equity Market Protection) Here ----- */}
                    <TouchableOpacity onPress={() => { setEmpPress(!empPress) }}>
                        <Text style={{ color: button, fontSize: 18 }}>{EMP}</Text>
                    </TouchableOpacity>
                </Card.Content>


                {/* ------ 5-Row (but only when click on EMP) ------ */}
                {
                    empPress === true ? (
                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 4, marginBottom: 10 }}>
                            <View style={{}}>
                                <Text style={{ color: text, fontSize: 18 }}>position</Text>
                                <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}>-</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: text, fontSize: 18 }}>Strike Price</Text>
                                <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}>-</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: text, fontSize: 18 }}>Expiry Date</Text>
                                <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}>-</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: text, fontSize: 18 }}>Pay off</Text>
                                <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}>-</Text>
                            </View>
                        </Card.Content>
                    )
                        :
                        (
                            null
                        )
                }

                {/* ------ 5-Row ------ */}
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 2 }}>
                    <TouchableOpacity onPress={showDialog}>
                        {/* ------ Card's date Here ----- */}
                        <Text style={{ color: button, fontSize: 15 }}>Value as on : {date}</Text>
                    </TouchableOpacity>
                    {/* ------ Dialog Used Here for Showing Dialog box when click on **Value as on**   ----- */}
                    <Portal>
                        <Dialog visible={dialogVoxVisible} onDismiss={hideDialog} style={{ borderRadius: 15, backgroundColor:cardBackground }}>
                            <Dialog.Content style={{ padding: 10 }}>
                                <Text style={{ fontSize: 15, color: label, textAlign: 'center' }}>
                                    For valuation accuracy of all the schemes please check the data post 4:00 PM
                                </Text>
                            </Dialog.Content>
                            <Dialog.Actions style={{ borderTopColor: text, borderTopWidth: .6, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={hideDialog} style={{ marginTop: 15 }}>
                                    <Text style={{ color: button, fontSize: 20, fontWeight: 'bold' }}>OK</Text>
                                </TouchableOpacity>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Card.Content>
            </Card>
        </View >
    );
};

export default CustomCard;
