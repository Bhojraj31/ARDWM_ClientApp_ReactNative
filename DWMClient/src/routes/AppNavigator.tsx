import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import UserDetail from '../screens/UserDetail';
import CreatePin from '../screens/CreatePin';
import EnterPin from '../screens/EnterPin';
import CustomHeader from '../components/CustomHeader';
import ForgetPin from '../screens/ForgetPin';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='UserDetail'
                    component={UserDetail}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='CreatePin'
                    component={CreatePin}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
                <Stack.Screen
                    name='EnterPin'
                    component={EnterPin}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='ForgetPin'
                    component={ForgetPin}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader navigation={navigation} title="" />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator

const styles = StyleSheet.create({})