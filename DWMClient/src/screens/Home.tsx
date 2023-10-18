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

    // bss
    // const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()
    // const [getTokenApiRequest, getTokenApiResponse] = useGetTokenMutation();
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     getTokenApiRequest({}).then((res) => {
    //         // console.log(res.data.responseObject);
    //         // dispatch(setToken(res.data.responseObject));
    //     })
    // }, [])
    // console.log(getTokenApiResponse);
    // const accessToken = useSelector((state: RootState) => state.token.responseObject);

    // console.log('token', accessToken);

    // useEffect(() => {
    //     apiType.value = apiTypes.token
    //     getTokenApiRequest({}).catch((error) => {
    //         console.error('Error in getTokenApiRequest:', error);
    //     });
    // }, []);

    // useEffect(() => {
    //     if (getTokenApiResponse.isSuccess) {
    //         console.log('Token API Response:', getTokenApiResponse);
    //         const gatedToken = getTokenApiResponse.data.responseObject;
    //         dispatch(setToken(gatedToken));
    //         console.log('Token stored in the Redux store:', gatedToken);
    //     } else if (getTokenApiResponse.isError) {
    //         console.error('Token API Error:', getTokenApiResponse.error);
    //     }
    // }, [getTokenApiResponse]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }} onPress={() => { navigation.navigate('UserDetail') }}>
                Get Start
            </Text>
            {/* <Text style={{ color: 'grey', fontSize: 14 }}>
                Access Token:{getTokenApiResponse.data?.responseObject}
            </Text> */}
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
