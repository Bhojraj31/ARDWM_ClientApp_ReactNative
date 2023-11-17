import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import AppNavigator from './app/navigations/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ToastProvider } from 'react-native-toast-notifications'
import { background } from './app/assets/constants/ColorConstants'
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <SafeAreaView style={{
        flex: 1, backgroundColor: background
      }}>
        <StatusBar
          backgroundColor={background}
          barStyle={'light-content'}
        />
        <ToastProvider
          placement='bottom'
          animationType="zoom-in"
          offset={30}
          duration={5000}
          animationDuration={800}
          swipeEnabled={true}
        >
          <AppNavigator />
        </ToastProvider>
      </SafeAreaView>
    </Provider>
  )
}

export default App