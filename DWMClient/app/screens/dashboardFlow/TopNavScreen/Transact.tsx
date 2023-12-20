/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Profile
 * @Type:- Functional Component
 * @Role:- For showing Profile
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { useTheme } from '../../../theme/ThemeProvider';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Invest from './TransactScreens/Invest';
import Switch from './TransactScreens/Switch';
import Withdraw from './TransactScreens/Withdraw';

const Transact = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { background, button, text } = theme.colors;

  const [isShowInvest, setIsShowInvest] = useState(false);
  const [isShowSwitch, setIsShowSwitch] = useState(false);
  const [isShowWithdraw, setIsShowWithdraw] = useState(false);

  /* --------- Invest  -------- */
  const callInvest = () => {
    setIsShowInvest(true);
    setIsShowSwitch(false);
    setIsShowWithdraw(false);
    // toggleCondition();
  };

  /* --------- Switch  -------- */
  const callSwitch = () => {
    setIsShowSwitch(true);
    setIsShowInvest(false);
    setIsShowWithdraw(false);
    // toggleCondition();
  };

  /* --------- Withdraw  -------- */
  const callWithdraw = () => {
    setIsShowWithdraw(true);
    setIsShowSwitch(false);
    setIsShowInvest(false);
    // toggleCondition();
  };

  return (
    <View style={{ flex: 1, backgroundColor: background }}>
      {/* Custom top tab here  */}
      <View style={[styles.topTapRow, { borderColor: text, }]}>
        {/* ------ Invest Tab here ------ */}
        <TouchableOpacity onPress={() => { callInvest() }} style={styles.topTapCol}>
          <View style={[styles.box, { borderColor: isShowInvest? button : text, }]}>
            <Text style={[styles.boxText, { color: isShowInvest? button : text, backgroundColor: background, paddingLeft:6}]}>
              +
            </Text>
          </View>
          <Text style={[styles.text, {color: isShowInvest? button : text, marginTop:2}]}>Invest</Text>
        </TouchableOpacity >

        {/* ------ Right Border here ------ */}
        <View style={{ borderRightWidth: .15, borderColor: text }}></View>

        {/* ------ Switch Tab here ------ */}
        <TouchableOpacity onPress={() => { callSwitch() }} style={styles.topTapCol}>
          <View style={[styles.box, { borderColor: isShowSwitch? button : text, }]}>
            <Text style={[styles.boxText, { color: isShowSwitch? button : text, backgroundColor: background,}]}>
              ↔
            </Text>
          </View>
          <Text style={[styles.text, {color: isShowSwitch? button : text}]} > Switch </Text>
        </TouchableOpacity >

        {/* ------ Right Border here ------ */}
        <View style={{ borderRightWidth: .15, borderColor: text }}></View>

        {/* ------ Withdraw Tab here ------ */}
        <TouchableOpacity onPress={() => { callWithdraw() }} style={styles.topTapCol}>
          <View style={[styles.box, { borderColor: isShowWithdraw? button : text, }]}>
            <Text style={[styles.boxText, { color: isShowWithdraw? button : text, backgroundColor: background, paddingTop:1, paddingLeft:8}]}>
              -
            </Text>
          </View>
          <Text style={[styles.text, {color: isShowWithdraw? button : text}]} > Withdraw </Text>
        </TouchableOpacity>
      </View>

      
      {isShowInvest && <Invest />}
      {isShowSwitch && <Switch />}
      {isShowWithdraw && <Withdraw />}

    </View>
  )
}

export default Transact

const styles = StyleSheet.create({
  topTapRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: .15,
    borderBottomWidth: .15,
    paddingVertical: 5,
  },
  topTapCol: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 3,
    position: 'relative',
    marginTop: 15
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: -15,
    right: -8,
  },
  text: {
    fontSize: 18,
    fontWeight: '300'
  }
})