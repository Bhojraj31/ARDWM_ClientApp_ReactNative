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