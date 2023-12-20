import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import AppNavigator from './app/navigations/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ToastProvider } from 'react-native-toast-notifications'
import { LogBox } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './app/theme/ThemeProvider'

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <SafeAreaView style={{
        flex: 1, backgroundColor: '#040D14'
      }}>
        <StatusBar
          backgroundColor= '#040D14'
          barStyle={'light-content'}
        />
        <ThemeProvider>
          <PaperProvider>

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

          </PaperProvider>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  )
}

export default App