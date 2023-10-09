import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
// import { useGetTokenQuery } from '../service/tokenService/index';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../slices/authSlice';
import { RootState } from '../store';
import { useGetTokenQuery } from '../service/TokenService';

const Test = () => {
    const { data: tokenData, error, isLoading } = useGetTokenQuery({});
    const dispatch = useDispatch();
    const accessToken = useSelector((state: RootState) => state.auth.accessToken);

    useEffect(() => {
        if (!isLoading && !error && tokenData) {
            const accessToken = tokenData.responseObject;
            dispatch(setToken(accessToken));
        }
    }, [tokenData, error, isLoading]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>
                Testing Here
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

export default Test

const styles = StyleSheet.create({})