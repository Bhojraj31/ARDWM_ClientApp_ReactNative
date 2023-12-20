/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:-  Recommended Portfolio
 * @Type:- functional component
 * @Ver - 1.0
 * @Role:- Recommended Portfolio
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-5
 * @Created by:- Yashwant Lohar
 * @Created on:-  07-Oct-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SectionList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { NavigationProp, useNavigation, } from '@react-navigation/native';
import { useTheme } from '../../../theme/ThemeProvider';
import { IconButton } from 'react-native-paper';
// import { background } from '../assets/constants/ColorConstants';
// import Icon from 'react-native-vector-icons/FontAwesome';

// ----- section list data -----
const sections = [
  {
    title: 'Section 1',
    data: [
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
    ],
  },
  {
    title: 'Section 2',
    data: ['HDFC Flexi Cap Fund - (G)', 'HDFC Flexi Cap Fund - (G)'],
  },
  {
    title: 'Section 3',
    data: [
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
    ],
  },
  {
    title: 'Section 4',
    data: ['HDFC Flexi Cap Fund - (G)', 'HDFC Flexi Cap Fund - (G)'],
  },
  {
    title: 'Section 5',
    data: [
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
      'HDFC Flexi Cap Fund - (G)',
    ],
  },
];

// ----- function return for console value return when click section list item -----
const PressPortfolio = () => {
  console.log('PressPortfolio');
};
const Portfolio = () => {
  const { theme } = useTheme();
  const { background, text, label, button, } = theme.colors;
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  return (
    <ScrollView style={{ backgroundColor: background }}>
      <View
        style={{
          flex: 1,
          backgroundColor: background,
          borderWidth: 1,
          borderColor: text,
          marginTop: 10,
          borderRadius: 5,
        }}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section }) => (
            <Text
              style={{
                fontSize: 20,
                color: label,
                backgroundColor: text,
                paddingLeft: 10,
              }}>
              {section.title}
            </Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={PressPortfolio}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ padding: 10, color: text }}>{item}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      padding: 10,
                      color: 'white',
                      marginLeft: 90,
                    }}>
                    1.44%
                  </Text>
                  <IconButton icon="chevron-right" size={20} iconColor={button} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Portfolio;
