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

// ------ React Native Funcational Export Component with styles ------
const Strategy = () => {
  // ------ Navigation here ------
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
  const accessWealthStrategyData = useSelector((state: RootState) => state.wealthstrategyData.responseObject);
  console.log('WealthStrategy Data from store ', accessWealthStrategyData);

  // Logic for Wealth target value here
  const Float_WealthTarget = parseFloat(accessWealthStrategyData.arTargetWealth) / 100000;
  // Divide by 100 if Float_WealthTarget is greater than or equal to 100
  const WealthTargetValue = Float_WealthTarget >= 100 ? (Float_WealthTarget / 100).toFixed(1) : Float_WealthTarget.toFixed(1);
  // Check the condition and add the appropriate suffix
  const WealthTargetUnit = Float_WealthTarget >= 100 ? `Cr` : `lac`;

  // Logic for CurrentWealth value here
  const Float_CurrentWealth = parseFloat(accessWealthStrategyData.currentWealth) / 100000;
  // Divide by 100 if Float_CurrentWealth is greater than or equal to 100
  const CurrentWealthValue = Float_CurrentWealth >= 100 ? (Float_CurrentWealth / 100).toFixed(1) : Float_CurrentWealth.toFixed(1);
  // Check the condition and add the appropriate suffix
  const CurrentWealthUnit = Float_CurrentWealth >= 100 ? `Cr` : `lac`;

  // Logic for AnnualSaving value here
  const Float_AnnualSaving = parseFloat(accessWealthStrategyData.annualSaving) / 100000;
  // Divide by 100 if Float_AnnualSaving is greater than or equal to 100
  const AnnualSavingValue = Float_AnnualSaving >= 100 ? (Float_AnnualSaving / 100).toFixed(1) : Float_AnnualSaving.toFixed(1);
  // Check the condition and add the appropriate suffix
  const AnnualSavingUnit = Float_AnnualSaving >= 100 ? `Cr` : `lac`;

  // Equity & Debt allocation 
  const [Float_Equity, setFloatEquity] = React.useState(parseFloat(accessWealthStrategyData.equityAllocation));
  const [Float_Debt, setFloatDebt] = React.useState(parseFloat(accessWealthStrategyData.debtAllocation));
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleSliderChange = (value: any) => {
    // Check if the slider value is within the valid range (0 to 100)
    if (value >= 0 && value <= 100) {
      // Check the direction of slider movement
      const isMovingForward = value > sliderValue;

      // Calculate the new values for Float_Equity and Float_Debt based on the slider position
      const equityIncrement = isMovingForward ? Float_Equity + 10 : Float_Equity - 10;
      const debtDecrement = isMovingForward ? Float_Debt - 10 : Float_Debt + 10;

      setSliderValue(value);

      // Update only if the calculated values are within the valid range (0 to 100)
      if (equityIncrement >= 0 && equityIncrement <= 100 && debtDecrement >= 0 && debtDecrement <= 100) {
        setFloatEquity(equityIncrement);
        setFloatDebt(debtDecrement);
      }
    }
  };

  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { cardBackground, label, button, text, background } = theme.colors;
  // ------ State for checked1 & checked2 ------
  const [checked1, setChecked1] = React.useState(!!parseFloat(accessWealthStrategyData.putOption));
  const [checked2, setChecked2] = React.useState(!!parseFloat(accessWealthStrategyData.planB));

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
              {WealthTargetValue}
            </Text>
            <Text variant="titleLarge" style={{ color: label, fontWeight: 'bold', fontSize: 15 }} >{WealthTargetUnit}</Text>
          </View>
          <Text variant="bodyMedium" style={{ color: label }}>Wealth Target</Text>
        </Card.Content>

        {/* ------ 2-Row ------ */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }} >
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('StrategyDetails') }}>
              <View style={{ flexDirection: 'row' }}>
                <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                  {CurrentWealthValue}
                </Text>
                <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > {CurrentWealthUnit} </Text>
              </View>
            </TouchableOpacity>
            <Text variant="bodyMedium" style={{ color: label }}>Current Wealth</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('StrategyDetails') }}>
              <View style={{ flexDirection: 'row' }}>
                <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                  {AnnualSavingValue}
                </Text>
                <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > {AnnualSavingUnit}</Text>
              </View>
            </TouchableOpacity>
            <Text variant="bodyMedium" style={{ color: label }}>Annual Saving</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('StrategyDetails') }}>
              <View style={{ flexDirection: 'row' }}>
                <Text variant="titleLarge" style={{ color: button, fontSize: 28 }} >
                  {accessWealthStrategyData.year}
                </Text>
                <Text variant="titleLarge" style={{ color: button, fontSize: 15 }} > Years </Text>
              </View>
            </TouchableOpacity>
            <Text variant="bodyMedium" style={{ color: label }}>TimeFrame</Text>
          </View>
        </Card.Content>

        {/* ------ 3-Row ------ */}
        <Card.Content style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ width: '21%', alignItems: 'center' }}>
            <Text variant="titleLarge" style={{ color: label, fontWeight: 'bold', fontSize: 28, alignSelf: 'center' }}>
              {Float_Equity}
            </Text>
            <Text style={{ color: text }}>Equity MF</Text>
          </View>

          <View style={{ width: '60%', marginTop: 5, alignSelf: 'center', alignItems: 'center' }}>
            <Slider
              style={{ width: '100%', alignSelf: 'center' }}
              thumbTintColor={button}
              maximumTrackTintColor={text}
              minimumTrackTintColor={button}
              minimumValue={25}
              step={25}
              maximumValue={100}
              value={sliderValue}
              onValueChange={handleSliderChange}
            />
            <Text style={{ color: label, fontSize: 15 }}>Asset Allocation </Text>
          </View>

          <View style={{ width: '19%', alignItems: 'flex-end' }}>
            <Text variant="titleLarge" style={{ color: label, fontWeight: 'bold', fontSize: 28, alignSelf: 'center' }}>
              {Float_Debt}
            </Text>
            <Text style={{ color: text }}>Debt MF</Text>
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
          <View style={{ paddingBottom: 0 }}>
            <Text style={{ color: text, textAlign: "center", fontSize: 12, marginVertical: 10 }}>Gain/Loss Estimate for 18.0Lacs over 3 years</Text>
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
                  itemTextStyle={{ color: label, fontSize: 15, fontWeight: 'bold' }}
                  visibleRest={1}
                />
                <Text style={{ textAlignVertical: 'center', color: text, fontSize: 14, }}>%</Text>
              </View>
              <Text style={{ fontSize: 16, color: text, marginRight: 5 }}>2.3<Text style={{ color: text, fontSize: 10 }}>Lacs</Text></Text>
              <Text style={{ fontSize: 16, color: 'red', }}>-1.3<Text style={{ fontSize: 10, color: 'red' }}>Lacs</Text></Text>
            </View>

            <Text style={{ color: text, fontSize: 12, textAlign: 'center', }}>Buy not buying put option I understand that my portfolio is {'\n'}exposed to potential loss due to market fall</Text>

            <TouchableOpacity style={{ alignSelf: 'center', marginTop: 12 }} onPress={() => { setChecked1(!checked1); }}>
              <Text style={{ fontSize: 17, color: button, textAlign: "center", }}>I Understand</Text>
            </TouchableOpacity>
          </View>
        }
      </Card>

      {/* ------ Custom view visibale when click on checked2 ------ */}
      {
        checked2 === false && checked1 === true &&
        <View style={{ marginTop: 60, margin: 80, padding: 10, }}>
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
      {
        checked1 &&
        < View style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }} >
          <TouchableOpacity >
            <Text style={{ color: button, fontSize: 18 }} >
              View Recommended Portfolio
            </Text>
          </TouchableOpacity>
        </View >
      }
    </View>
  )
};

export default Strategy

const styles = StyleSheet.create({});