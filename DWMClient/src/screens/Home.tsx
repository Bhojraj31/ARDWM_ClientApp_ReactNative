import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../slices/TokenSlice';
import { RootState } from '../store';
import { useLazyGetTokenQuery } from '../service/TokenService';
import { apiType, apiTypes } from '../assets/constants/ApiConstants';

function Home() {
    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
    const [getTokenApiRequest, getTokenApiResponse] = useLazyGetTokenQuery();
    const dispatch = useDispatch();
    const accessToken = useSelector((state: RootState) => state.token.responseObject);

    // const apiType = apiTypes.token
    // console.log(accessToken);
    
    useEffect(() => {
        apiType.value = apiTypes.token
        getTokenApiRequest({});
    }, []);

    useEffect(() => {
        if (getTokenApiResponse.isSuccess) {
            console.log('Token API Response:', getTokenApiResponse);
            const gatedToken = getTokenApiResponse.data.responseObject;
            dispatch(setToken(gatedToken));
            console.log('Token API Response:', getTokenApiResponse);
        } 
    }, [getTokenApiResponse]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }} onPress={() => { navigation.navigate('UserDetail') }}>
                Get Start
            </Text>
            {
                accessToken && (
                    <Text style={{ color: 'grey', fontSize: 14 }}>
                        Access Token: {accessToken}
                    </Text>
                )
            }
        </View>
    )
}

export default Home
