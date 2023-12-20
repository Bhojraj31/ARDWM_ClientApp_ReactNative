/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Carousels
 * @Type:- Functional Component
 * @Role:- For showing Carousels on dashboard screen
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useState, } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import TotalPortfolio from '../screens/dashboardFlow/DashboardScreens/TotalPortfolio';
import TodaysWealth from '../screens/dashboardFlow/DashboardScreens/TodaysWealth';
import ShortTermPortfolio from '../screens/dashboardFlow/DashboardScreens/ShortTermPortfolio';
import TaxPortfolio from '../screens/dashboardFlow/DashboardScreens/TaxPortfolio';
import NonPPStructuredProduct from '../screens/dashboardFlow/DashboardScreens/NonPPStructuredProduct';
import UnutilizedFunds from '../screens/dashboardFlow/DashboardScreens/UnutilizedFunds';
import Carousel from 'react-native-reanimated-carousel';

// ------ Get width & heigth from divice here ------
const { height, width } = Dimensions.get('window');

// ------ React Native Funcational Export Component with styles------
const CustomCarousels = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { label, text, background } = theme.colors;
  // ------ Define the components for each index ------
  const components = [
    <TotalPortfolio key={1} />,
    <TodaysWealth key={2} />,
    <ShortTermPortfolio key={3} />,
    <TaxPortfolio key={4} />,
    <NonPPStructuredProduct key={5} />,
    <UnutilizedFunds key={6} />,
  ];
  // ------ State for currentIndex ------
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // ------ Return react native component here ------
  return (
    // ------ Parent View Of this component  ------
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
      {/* ------ Corousels View Of this component  ------ */}
      <View
        style={{
          height: height - 160,
        }}
      >
        {/* Carousels Here */}
        <Carousel
          loop
          mode="parallax"
          width={width}
          height={width / 2}
          // autoPlay={true}
          data={components}
          style={{ flex: components[1] ? 2 : 1, }}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: width,
                height: height,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                disabled={true}
                style={{
                  width: '97%',
                  height: '100%',
                }}
              >
                {/* Render the component based on the index */}
                {components[index]}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {/* ------ Pagination View Of this component  ------  */}
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          position: 'absolute',
          bottom: 20,
        }}
      >
        {components.map((item, index) => {
          const adjustedIndex = index;
          return (
            <View
              key={adjustedIndex}
              style={{
                width: currentIndex === adjustedIndex ? 10 : 8,
                height: currentIndex === adjustedIndex ? 10 : 8,
                borderRadius: currentIndex === adjustedIndex ? 5 : 4,
                borderWidth: currentIndex === adjustedIndex ? 1 : .5,
                borderColor: currentIndex === adjustedIndex ? label : text,
                backgroundColor: currentIndex === adjustedIndex ? label : background,
                marginLeft: 5,
              }}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default CustomCarousels;
