/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- SwitchDetails
 * @Type:- Functional Component
 * @Role:- For showing SwitchDetails Screen
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  06-12-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import React, { useState } from 'react'
import { useTheme } from '../../../../../theme/ThemeProvider';
import { Card } from 'react-native-paper';
import numberToWords from 'number-to-words';
import Tooltip from 'react-native-walkthrough-tooltip';

const SwitchDetails = () => {
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { cardBackground, label, button, text, background } = theme.colors;

    // ------ State for enteredNumber ------
    const [enteredNumber, setEnteredNumber] = useState<string>('');
    // ------ State for ToolTipVisible ------
    const [toolTipVisible, setToolTipVisible] = useState(false);

    // !------ Dropdown States ------! //
    // ------ State for isOpen ------
    const [isOpen, setIsOpen] = useState(false);
    // ------ State for selectedValue ------
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    // ------ State for isOpen ------
    const [onSelect, setOnSelect] = useState<string | null>(null);
    // ------ Options data for dropdown ------
    const options = ['Short Term', 'Wealth Portfolio', 'Others'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        // setOnSelect(value);
        toggleDropdown();
    };

    const handleInputChange = (text: string) => {
        // Update the state with the entered number
        setEnteredNumber(text);
    };

    // Function to convert a number to its corresponding text representation
    const numberToText = (number: string): string => {
        const numericValue = parseInt(number, 10);
        if (!isNaN(numericValue)) {
            // Use the number-to-words library to convert the numeric value to words
            const words = numberToWords.toWords(numericValue);
            // Capitalize the first letter
            return words.charAt(0).toUpperCase() + words.slice(1);
        }
        return ' ';
    };

    // States for Sell & buy buttons
    const [isShowSell, setIsShowSell] = useState(false);
    const [isShowBuy, setIsShowBuy] = useState(false);
    /* --------- Sell  -------- */
    const callSell = () => {
        setIsShowSell(true);
        setIsShowBuy(false);
    };

    /* --------- Buy  -------- */
    const callBuy = () => {
        setIsShowBuy(true);
        setIsShowSell(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: background, padding: 15 }}>
            {/* switch amount card here  */}
            <Card style={{ backgroundColor: cardBackground, borderRadius: 10 }}>
                {/* row-1 */}
                <Card.Content style={{ alignItems: 'center' }}>
                    {/* ------ Card's Tittle Here ----- */}
                    <Text style={[styles.text, { color: text, marginVertical: 0 }]}>Switch Amount</Text>
                    <View style={styles.row}>
                        <Text style={[styles.heading, { color: label }]}>
                            ₹
                        </Text>
                        <TextInput
                            style={{
                                color: button,
                                width: 100,
                                paddingHorizontal: 5,
                                fontSize: 25,
                            }}
                            keyboardType='decimal-pad'
                            textAlignVertical='center'
                            cursorColor={button}
                            onChangeText={handleInputChange}
                        />
                    </View>
                    <Text style={[styles.text, { color: text }]}>
                        {numberToText(enteredNumber)}
                    </Text>
                    <Text style={[styles.text, { color: text }]}>
                        Current Balance: ₹ 3,69,661
                    </Text>
                </Card.Content>

                {/* row-2 */}
                <Card.Content style={[styles.row, { marginVertical: 2 }]}>
                    {/* left View */}
                    <View style={styles.leftCol}>
                        <Text style={[styles.heading, { color: label }]}>--</Text>
                        <Text style={[styles.subHeading, { color: text, marginLeft: 5 }]}>_</Text>
                    </View>
                    <View style={styles.rightCol}>
                        <Text style={[styles.heading, { color: label }]}>1.0 </Text>
                        <Text style={[styles.subHeading, { color: text, marginTop: 8 }]}>K</Text>
                    </View>
                </Card.Content>

                {/* row-3 */}
                <Card.Content style={[styles.row, { marginVertical: 2 }]}>
                    <View style={styles.leftCol}>
                        <Text style={[styles.subHeading, { color: text }]}>
                            Estimated Exit Load
                        </Text>
                    </View>
                    <View style={styles.rightCol}>
                        <Text style={[styles.subHeading, { color: text }]}>
                            Maximum Tax Implication
                        </Text>
                        {/* tooltip */}
                        <Tooltip
                            isVisible={toolTipVisible}
                            contentStyle={{ backgroundColor: cardBackground }}
                            content={
                                <View style={{ width: 300, padding: 10 }}>
                                    <Text style={{ fontSize: 17, color: label, fontWeight: 'bold' }}>
                                        Maximum Tax Implication
                                    </Text>
                                    <View style={[styles.row, { justifyContent: 'space-between', marginVertical: 0 }]}>
                                        {/* left side*/}
                                        <View>
                                            <Text style={[styles.subHeading, { color: text }]}>
                                                STCG Debt
                                            </Text>
                                            <Text style={[styles.subHeading, { color: label, marginVertical: 10 }]}>
                                                Total Tax
                                            </Text>
                                        </View>
                                        {/* right side*/}
                                        <View>
                                            <Text style={[styles.subHeading, { color: text }]}>
                                                976
                                            </Text>
                                            <Text style={[styles.subHeading, { color: label, marginVertical: 10 }]}>
                                                976
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={[styles.subHeading, { color: text }]}>
                                        *this is an approximation assuming that these are the only gain/losses
                                    </Text>
                                </View>
                            }
                            placement="bottom"
                            onClose={() => setToolTipVisible(false)}
                            showChildInTooltip={false}
                        >
                            <TouchableOpacity onPress={() => setToolTipVisible(true)} style={[styles.circle, { borderColor: button, }]}>
                                <Text style={[styles.circleI, { color: button }]}>
                                    i
                                </Text>
                            </TouchableOpacity>
                        </Tooltip>
                    </View>
                </Card.Content>
            </Card>

            {/* Switch From > Switch to box here */}
            <View style={[styles.row, { justifyContent: 'space-between', marginVertical: 10 }]}>
                {/* col-1 */}
                <View style={[styles.col, { borderColor: text }]}>
                    <Text style={[styles.subHeading, { color: label }]}>Switch from </Text>
                    {/* Dropdown */}
                    <View >
                        <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
                            <Text style={[styles.subHeading, { color: button }]}>{selectedValue || 'Select an option'}</Text>
                            <Image
                                source={require('../../../../../assets/images/Arrow.png')} // Replace with your arrow icon
                                style={[styles.arrowIcon, { tintColor: button }, isOpen && styles.rotateArrow]}
                            />
                        </TouchableOpacity>
                        {isOpen && (
                            <View style={styles.dropdown}>
                                <FlatList
                                    data={options}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => handleSelect(item)} style={[styles.option,]}>
                                            <Text style={[styles.subHeading, { color: button }]}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item) => item}
                                />
                            </View>
                        )}
                    </View>

                    <Text style={[styles.subHeading, { color: text }]}>Current Balance ( ₹ )</Text>
                    <Text style={[styles.heading, { color: text, fontWeight: '400' }]}>3.70 L</Text>
                </View>

                {/* ARROW */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.heading, { color: label, fontWeight: '400' }]}>
                        {'>'}
                    </Text>
                </View>

                {/* col-2 */}
                <View style={[styles.col, { borderColor: text }]}>
                    <Text style={[styles.subHeading, { color: label }]}>Switch to </Text>
                    {/* Dropdown */}
                    <View>
                        <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
                            <Text style={[styles.subHeading, { color: button }]}>{selectedValue || 'Select an option'}</Text>
                            <Image
                                source={require('../../../../../assets/images/Arrow.png')} // Replace with your arrow icon
                                style={[styles.arrowIcon, { tintColor: button }, isOpen && styles.rotateArrow]}
                            />
                        </TouchableOpacity>
                        {isOpen && (
                            <View style={styles.dropdown}>
                                <FlatList
                                    data={options}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                                            <Text style={[styles.subHeading, { color: button }]}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item) => item}
                                />
                            </View>
                        )}

                    </View>
                    <Text style={[styles.subHeading, { color: text }]}>Current Balance ( ₹ )</Text>
                    <Text style={[styles.heading, { color: text, fontWeight: '400' }]}>45.23 L</Text>
                </View>
            </View>

            {/* Sell and buy top-tab here*/}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <TouchableOpacity onPress={() => { callSell() }} style={{ width: '45%', backgroundColor: isShowSell ? button : background, borderWidth: .5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderColor: button }}>
                    <Text style={[styles.text, { color: isShowSell ? background : button, textAlign: 'center' }]}>
                        Sell
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { callBuy() }} style={{ width: '45%', backgroundColor: isShowBuy ? button : background, borderWidth: .5, borderTopEndRadius: 5, borderBottomEndRadius: 5, borderColor: button }}>
                    <Text style={[styles.text, { color: isShowBuy ? background : button, textAlign: 'center' }]}>
                        Buy
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Text here */}
            <Text style={[styles.text, {color: text }]}>
                This is a tentative buy list. We will send you a final buy order based on the proceeds received from executing the sell order of switch
            </Text>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.subHeading, { fontWeight: '200', color: text }]}>
                    Switch in
                </Text>
                <Text style={[styles.subHeading, { fontWeight: '200', color: text }]}>
                    Allocation
                </Text>
            </View>

            {
                isShowBuy &&
                <View style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }} >
                    <TouchableOpacity >
                        <Text style={{ color: button, fontSize: 18 }} >
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View >
            }

            {
                isShowSell &&
                <View style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }} >
                    <TouchableOpacity >
                        <Text style={{ color: button, fontSize: 18 }} >
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View >
            }
        </View>
    )
}

export default SwitchDetails

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '300',
        marginVertical: 10,
    },
    heading: {
        fontSize: 25,
        fontWeight: '600'
    },
    subHeading: {
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    leftCol: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10
    },
    rightCol: {
        width: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    circle: {
        width: 23,
        height: 23,
        borderWidth: 2,
        borderRadius: 50,
        marginLeft: 5,
        alignItems: 'center'
    },
    circleI: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    col: {
        width: '46%',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingLeft: 20,
        paddingVertical: 20
    },
    arrowIcon: {
        marginLeft: 'auto',
        width: 18,
        height: 18,
        transform: [{ rotate: '270deg' }],
    },
    rotateArrow: {
        transform: [{ rotate: '90deg' }],
    },
    dropdown: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 5,
    },
    option: {
        // padding: 5,
        marginLeft: 40,
        // marginTop: 5,
        // backgroundColor:'red'
        // alignSelf:'flex-end'
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderBottomWidth: .5,
        // borderRadius: 5,
    },
})