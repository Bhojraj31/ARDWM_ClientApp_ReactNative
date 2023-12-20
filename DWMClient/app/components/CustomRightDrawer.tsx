/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Custom Family Drawer
 * @Type:- Functional Component
 * @Role:- For showing Custom Family Drawer
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  04-12-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useTheme } from '../theme/ThemeProvider';
import { IconButton } from 'react-native-paper';

// ------ React Native Funcational Export Component with styles------
const CustomRightDrawer = (props: any) => {
    const { navigation } = props;
    // ------ Used Theme Here ------
    const { theme, toggleTheme } = useTheme();
    const { drawerBackground, button, label, text } = theme.colors;
    const progress = useSharedValue(0);
    // ------ animatedStyle here for open and close custom drawer------
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(progress.value, [0, 100], [0, 0]),
                },
            ],
        };
    });
    // data for Selection list
    const DATA = [
        {
            title: `Kirtan's Wealth Strategy`,
            data: [
                {
                    firstname: 'Kiran',
                    lastname: 'Patel'
                },
                {
                    firstname: 'Meghana',
                    lastname: 'Patel'
                },
            ]
        },
        {
            title: `Sunita's Wealth Strategy`,
            data: [
                {
                    firstname: 'Sunita',
                    lastname: 'Zanje'
                },
            ]
        },
    ];

    interface ListItem {
        firstname: string;
        lastname: string;
    }

    interface Section {
        title: string;
        data: ListItem[];
    }

    const renderItem = ({ item }: { item: ListItem }) => (
        <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50, paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: text }}>
            <View style={{ width: 35, height: 35, backgroundColor: button, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: label }}>{`${item.firstname.charAt(0)}${item.lastname.charAt(0)}`}</Text>
            </View>
            <View style={styles.item}>
                <Text style={[styles.title, { color: label }]}>{`${item.firstname} ${item.lastname}`}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section: { title } }: { section: Section }) => (
        <TouchableOpacity onPress={() => navigation.closeDrawer()} style={[styles.row, { borderBottomColor: text }]}>
            <IconButton icon="account-group" size={18} iconColor="#fff" style={{ margin: null, borderRadius: 50, backgroundColor: button }} />
            <Text style={[styles.header, { color: label }]}>{title}</Text>
        </TouchableOpacity>
    );
    const keyExtractor = (item: ListItem, index: number) => `${item.firstname}-${item.lastname}-${index}`;
    // ------ Return react native component here ------
    return (
        // ------ Parent Animated.View Of this component  ------
        <Animated.View style={[animatedStyle, { flex: 1 }]} >
            {/* ------ Right Drawer Screen ------ */}
            <View style={{ flex: 1, paddingTop: 25, backgroundColor: drawerBackground }}>
                <SectionList
                    sections={DATA}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                />
            </View>
        </Animated.View>

    )
}

export default CustomRightDrawer

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 15,
        marginTop: 20,
        borderBottomWidth: .5,
    },
    item: {
        padding: 10,
        paddingVertical: 15,
    },
    header: {
        fontSize: 20,
        alignSelf: 'center'
    },
    title: {
        fontSize: 16,
    },
});