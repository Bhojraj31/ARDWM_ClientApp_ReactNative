/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Switch
 * @Type:- Functional Component
 * @Role:- For showing Switch Screen
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'
import { SelectCountry } from 'react-native-element-dropdown';
import { useTheme } from '../../../../theme/ThemeProvider';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Switch = () => {
    // ------ Navigation here  ------
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { background, button, text } = theme.colors;

    const [selectedItem, setSelectedItem] = useState(null);
    const [country, setCountry] = useState('1');
    const data = [
        { id: '1', label: 'Switch', status: 'Current Value 47.60L' },
        { id: '2', label: 'Kirtan Patel', status: 'Current Value 47.60L' },
        { id: '3', label: 'Kirtan Patel', status: 'Current Value 47.60L' },
        { id: '4', label: 'Kirtan Patel', status: 'Current Value 47.60L' },
        // Add more items as needed
    ];

    const local_data = [
        {
            value: '1',
            lable: 'Country 1',
        },
        {
            value: '2',
            lable: 'Country 2',
        },
    ];

    /* ---------- calling function ---------- */
    const handleItemSelect = (item: {
        id: React.SetStateAction<null>;
        label: any;
        status: string;
    }) => {
        setSelectedItem(item.id);
        console.log(`Selected item: ${item.label}`);
    };
    const renderItem = ({ item }: any) => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-Between',
                    paddingVertical: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: '#111920',
                }}
            >
                {/* ---------- Select Family Member Start ---------- */}

                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => handleItemSelect(item)}>
                    {selectedItem != item.id ? (
                        <View
                            style={[
                                styles.radioOuterStyle,
                                styles.radioSelectedStyle,
                                styles.radioInnerStyle,
                            ]}
                        />
                    ) : (
                        <View
                            style={[
                                styles.radioOuter,
                                styles.radioSelected,
                                styles.radioInner,
                            ]}
                        />
                    )}
                    <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ paddingHorizontal: 0 }}>
                    <SelectCountry
                        style={styles.dropdown}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        maxHeight={250}
                        value={country}
                        data={local_data}
                        valueField="value"
                        labelField="lable"
                        placeholder="Select"
                        itemContainerStyle={{
                            backgroundColor: '#111920',
                            borderBlockColor: '#111920',
                        }}
                        activeColor="#111920"
                        onChange={e => {
                            setCountry(e.value);
                        }}
                        imageField={' '}
                    />
                </View>
                <Text style={styles.status}>{item.status}</Text>
            </View>
        </View>

    );
    return (
        <View style={styles.container}>
            <View
                style={{
                    borderBottomWidth: 1,
                    // borderBottomColor: '#37B4E4',
                    marginHorizontal: 10,
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginHorizontal: 0,
                        marginVertical: 10,
                        fontSize: 15,
                    }}>
                    Choose an Account
                </Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedItem}
            />
            <View style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }} >
                <TouchableOpacity onPress={()=> navigation.navigate('SwitchDetails')}>
                    <Text style={{ color: button, fontSize: 20, fontWeight: '600' }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View >
        </View>
    )
}

export default Switch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: background,
        paddingHorizontal: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },

    label: {
        fontSize: 16,
        color: 'lightgray',
        paddingHorizontal: 10,
    },
    status: {
        fontSize: 10,
        color: 'lightgray',
        marginHorizontal: 15,
    },
    radioButtonIcon: {
        width: 5,
        height: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white', // Change the color as needed
        backgroundColor: '#37B4E4', // Change the color as needed
        marginLeft: 8,
    },
    radioOuter: {
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#37B4E4',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    radioSelected: {
        borderColor: '#37B4E4',
        backgroundColor: 'lightblue',
    },
    radioInner: {
        height: 20,
        width: 20,
        borderRadius: 20,
        borderColor: '#37B4E4',
        backgroundColor: 'lightblue',
    },
    radioInnerStyle: {
        padding: 5,
        height: 20,
        width: 20,
        borderRadius: 20,
        borderColor: '#37B4E4',
        backgroundColor: '#030f1a',
    },
    radioOuterStyle: {
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#37B4E4',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    radioSelectedStyle: {
        borderColor: '#37B4E4',
    },
    dropdown: {
        height: 30,
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    placeholderStyle: {
        fontSize: 13,
        color: 'black',
    },
    selectedTextStyle: {
        fontSize: 13,
        color: 'lightgray',
    },
})