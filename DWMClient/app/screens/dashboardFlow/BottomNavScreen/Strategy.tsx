/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Strategy
 * @Type:- Functional Component
 * @Role:- For showing Strategy
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';
import Slider from '@react-native-community/slider'
import WheelPicker from '@dppo/react-native-wheely';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '../../../theme/ThemeProvider';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { parseTwoDigitYear } from 'moment';

// ------ React Native Funcational Export Component with styles ------
const Strategy = () => {
  // ------ Navigation here ------
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
  const accessWealthStrategyData = useSelector((state: RootState) => state.wealthstrategyData.responseObject);
  console.log('WealthStrategy Data from store', accessWealthStrategyData);

  const Float_WealthTarget = (parseFloat(accessWealthStrategyData.arTargetWealth) / 100000).toFixed(1);

  // Divide by 100 if Float_WealthTarget is greater than or equal to 100
  const adjustedFloat_WealthTarget = parseFloat(Float_WealthTarget) >= 100
    ? (parseFloat(Float_WealthTarget) / 100).toFixed(1)
    : Float_WealthTarget;

  // Check the condition and add the appropriate suffix
  const formattedWealthTarget = parseFloat(adjustedFloat_WealthTarget) >= 1
    ? `${adjustedFloat_WealthTarget} Cr`
    : `${adjustedFloat_WealthTarget} lac`;


  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { cardBackground, label, button, text, background } = theme.colors;
  // ------ State for checked1 & checked2 ------
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  // ------ Numbers data array testing  for Wheelpicker ------
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  // ------ Return react native component here ------
  return (
    // ------ Parent View Of this component  ------
    <View style={{ flex: 1, backgroundColor: background, padding: 10 }}>
      {/* ------ Card here ------ */}
      <Card style={{ backgroundColor: cardBackground, padding: 5 }} >

        {/* ------ 1-Row ------ */}
        <Card.Content style={{ alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text variant="titleLarge" style={{ color: label, fontWeight: 'bold', fontSize: 28 }} >
              {formattedWealthTarget}
            </Text>
          </View>
          <Text variant="bodyMedium" style={{ color: label }}>Wealth Target</Text>
        </Card.Content>

        {/* ------ 2-Row ------ */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }} >
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('StrategyDetails') }}>
              <View style={{ flexDirection: 'row' }}>
                <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                  18.0
                </Text>
                <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Lacs </Text>
              </View>
            </TouchableOpacity>
            <Text variant="bodyMedium" style={{ color: label }}>Current Wealth</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('StrategyDetails') }}>
              <View style={{ flexDirection: 'row' }}>
                <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                  1.0
                </Text>
                <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Lacs </Text>
              </View>
            </TouchableOpacity>
            <Text variant="bodyMedium" style={{ color: label }}>Annual Saving</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('StrategyDetails') }}>
              <View style={{ flexDirection: 'row' }}>
                <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                  25
                </Text>
                <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Years </Text>
              </View>
            </TouchableOpacity>
            <Text variant="bodyMedium" style={{ color: label }}>TimeFrame</Text>
          </View>
        </Card.Content>

        {/* ------ 3-Row ------ */}
        <Card.Content style={{ flexDirection: 'row', marginTop: 20 }} >
          <View style={{ width: '20%', alignItems: 'flex-start' }}>
            <Text variant="titleLarge" style={{ color: label, fontWeight: 'bold', fontSize: 28, alignSelf: 'center' }} >
              60
            </Text>
            <Text style={{ color: text }} >
              Equity MF
            </Text>
          </View>

          <View style={{ width: '60%', marginTop: 5, alignSelf: 'center', alignItems: 'center' }}>
            <Slider style={{ width: '100%', alignSelf: 'center' }} thumbTintColor={button} maximumTrackTintColor={text} minimumTrackTintColor={button} />
            <Text style={{ color: label, fontSize: 15 }} >Asset Allocation </Text>
          </View>
          <View style={{ width: '20%', alignItems: 'flex-end' }}>
            <Text variant="titleLarge" style={{ color: label, fontWeight: 'bold', fontSize: 28, alignSelf: 'center' }} >
              40
            </Text>
            <Text style={{ color: text }} >
              Debt MF
            </Text>
          </View>
        </Card.Content>


        {/* ------ 4-Row ------ */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              color={button}
              uncheckedColor={button}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
            <Text style={{ fontSize: 13, color: label, fontWeight: '500', }} >
              Equity Market {'\n'}Protection
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              color={button}
              uncheckedColor={button}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <Text style={{ fontSize: 13, color: label, fontWeight: '500', }} >
              Plan B with NON-PP {'\n'}Structured Protection
            </Text>
          </View>
        </Card.Content>

        {/* ------ 5-Row (but only when click on checked1) ------ */}
        {
          !checked1 &&
          <View style={{ paddingBottom: 24 }}>
            <Text style={{ color: text, textAlign: "center", fontSize: 12, margin: 20 }}>Gain/Loss Estimate for 18.0Lacs over 3 years</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
              <Text style={{ color: text, textAlign: 'center', }}>NIFTY{'\n'}Return</Text>
              <Text style={{ color: text, textAlign: 'center', }}>Equity Market{'\n'}Protection</Text>
              <Text style={{ color: text, textAlign: 'center', }}>No {'\n'}Protection</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginRight: 25 }}>
              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ textAlignVertical: 'center', color: text, fontSize: 10, marginLeft: -25 }}>Historical</Text>
                <WheelPicker
                  selectedIndex={9}
                  options={numbers.map((item) => item.toString())}
                  onChange={(index) => { }}
                  selectedIndicatorStyle={{ backgroundColor: 'transparent', borderTopWidth: 1, borderBottomWidth: 1, borderColor: text }}
                  itemTextStyle={{ color: label, fontSize: 20, fontWeight: 'bold' }}
                  visibleRest={1}
                />
                <Text style={{ textAlignVertical: 'center', color: text, fontSize: 14, }}>%</Text>
              </View>
              <Text style={{ fontSize: 16, color: text, marginRight: 5 }}>2.3<Text style={{ fontSize: 10 }}>Lacs</Text></Text>
              <Text style={{ fontSize: 16, color: 'red', }}>-1.3<Text style={{ fontSize: 10 }}>Lacs</Text></Text>
            </View>

            <Text style={{ color: text, fontSize: 12, textAlign: 'center', marginTop: 24 }}>Buy not buying put option I understand that my portfolio is {'\n'}exposed to potential loss due to market fall</Text>

            <TouchableOpacity style={{ alignSelf: 'center', marginTop: 12 }} onPress={() => { setChecked1(!checked1); }}>
              <Text style={{ fontSize: 17, color: button, textAlign: "center", }}>I Understand</Text>
            </TouchableOpacity>
          </View>
        }
      </Card>

      {/* ------ Custom view visibale when click on checked2 ------ */}
      {
        checked2 === false && checked1 === true &&
        <View style={{ marginTop: 160, margin: 80, padding: 10, }}>
          <Text style={{ color: label, fontSize: 17, textAlign: "center", marginVertical: 5 }}>Update</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: '50%', alignItems: 'center' }}>
              <Text style={{ fontSize: 17, color: button }}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', alignItems: 'center' }}>
              <Text style={{ fontSize: 17, color: button }}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      }

      {/* ------ View recommended Portfolio button here------ */}
      < View style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }} >
        <TouchableOpacity >
          <Text style={{ color: button, fontSize: 18 }} >
            View Recommended Portfolio
          </Text>
        </TouchableOpacity>
      </View >
    </View>
  )
};

export default Strategy

const styles = StyleSheet.create({});