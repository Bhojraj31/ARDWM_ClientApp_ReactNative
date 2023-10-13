/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- App
* @Type:- Functional Component
* @Role:- RooT Component
* @Sprint:- Sprint 1.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from './routes/AppNavigator'
import { Provider } from 'react-redux';
import { store } from './store'
import Test from './screens/Test';


const App = () => {
  
  return (
    <Provider store={store}>
      <AppNavigator />
      
      {/* <Test/> */}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})