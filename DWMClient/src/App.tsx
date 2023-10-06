import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from './routes/AppNavigator'
import { Provider } from 'react-redux';
import { store } from './store'
// import { useLoginMutation } from './service/AuthService'

const App = () => {

  // api

  // const [loginApiRequest, loginApiResponse] = useLoginMutation();

  // function _login () {
  //   loginApiRequest({
  //     email: "john@mail.com",
  //     password: "changeme",
  //   });
  // }

  // useEffect(()=>{
  //   if(loginApiResponse.isSuccess) {

  //   }
  //   if(loginApiResponse.isError) {

  //   }

  // },[loginApiResponse])

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    
    // <Button title='Login' onPress={_login}/>
  )
}

export default App

const styles = StyleSheet.create({})