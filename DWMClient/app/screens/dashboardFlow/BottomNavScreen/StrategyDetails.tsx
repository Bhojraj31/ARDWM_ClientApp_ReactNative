import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import WheelPicker from '@dppo/react-native-wheely';
import { useNavigation } from '@react-navigation/native'
import { CustomHorizontalPicker } from '../../../components/CustomHorizontalPicker';
import { useTheme } from '../../../theme/ThemeProvider';

// ------ React Native Funcational Export Component with styles ------
export default function StrategyDetails() {
    // ------ Used Theme Here ------
    const { theme } = useTheme();
    const { background, button, text, label } = theme.colors;

    const { goBack } = useNavigation();
    // ------ Numbers data array testing  for Wheelpicker ------
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    // ------ Return react native component here ------
    return (
        // ------ Parent View Of this component  ------
        <View style={{ flex: 1, backgroundColor: background }}>
            {/* ------ Row-1 ------  */}
            <View style={{ marginTop: 15 }}>
                <Text style={[styles.heading, { fontSize: 30, color: button, }]}>9.8Cr</Text>
                <Text style={[styles.heading, { color: label }]}>Wealth Target</Text>
                <Text style={[styles.heading, { color: text }]}>50X</Text>
            </View>

            {/* ------ Row-2 ------  */}
            <View style={styles.row}>
                {/* col-1 current wealth */}
                <View style={styles.col}>
                    <Text style={[styles.heading, { color: label }]}>Current Wealth</Text>
                    <Text style={[styles.subHeading, { color: text }]}>Financial Assets - MF, Shares, Fd {'\n'}& Bonds</Text>
                    <View style={styles.WheelPicker}>
                        <WheelPicker
                            selectedIndex={9}
                            options={numbers.map((item) => item.toString())}
                            onChange={(index) => { }}
                            selectedIndicatorStyle={{ backgroundColor: 'transparent', borderTopWidth: 1, borderBottomWidth: 1, borderColor: text }}
                            itemTextStyle={{ color: label, fontSize: 20, fontWeight: 'bold' }}
                            containerStyle={{ width: 76, }}
                            itemHeight={50}
                        />
                        <Text style={{ textAlignVertical: 'center', color: label }}>Lacs</Text>
                    </View>
                </View>

                {/* col-2 Progress bar */}
                <View style={[styles.lineContainer, { backgroundColor: text }]}>
                    <View style={[styles.progress, { height: '50%', backgroundColor: button }]}></View>
                </View>

                {/* col-3 current wealth */}
                <View style={styles.col}>
                    <Text style={[styles.heading, { color: label }]}>Annual Savings</Text>
                    <Text style={[styles.subHeading, { color: text }]}>We expect your savings will {'\n'}double every 5 years</Text>
                    <View style={styles.WheelPicker}>
                        <WheelPicker
                            selectedIndex={9}
                            options={numbers.map((item) => item.toString())}
                            onChange={(index) => { }}
                            selectedIndicatorStyle={{ backgroundColor: 'transparent', borderTopWidth: 1, borderBottomWidth: 1, borderColor: text }}
                            itemTextStyle={{ color: label , fontSize: 20, fontWeight: 'bold' }}
                            containerStyle={{ width: 76, }}
                            itemHeight={50}
                        />
                        <Text style={{ textAlignVertical: 'center', color: label, }}>Lacs</Text>
                    </View>
                </View>
            </View>

            {/* ------ Row-3 ------  */}
            <Text style={{ fontSize: 18, color: label, textAlign: 'center', marginTop: 36 }}>
                Timeframe <Text style={{ color: '#505050' }}>(years)</Text>
            </Text>
            <View style={{ height: 42, marginVertical: 5 }}>
                <CustomHorizontalPicker />
            </View>
            <TouchableOpacity style={{ alignSelf: 'center', marginTop: 42 }} onPress={goBack}>
                <Text style={{ fontSize: 20, color: button, fontWeight: 'bold' }}>Continue</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500'
    },
    subHeading: {
        fontSize: 12,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
    },
    col: {
        width: '46%',
        marginTop: '30%'
    },
    WheelPicker: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10,
        marginLeft: 10,
    },
    lineContainer: {
        width: '2%',
        height: '100%',
        marginHorizontal: '2%',
        position: 'relative',
    },
    progress: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
});