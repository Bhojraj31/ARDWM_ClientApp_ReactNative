import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
// import {
//     FLUSH,
//     PAUSE,
//     PERSIST,
//     persistStore,
//     PURGE,
//     REGISTER,
//     REHYDRATE
// } from 'redux-persist';

import { authApi } from './service/index';
// import { tokenApi } from './service/tokenService/index';

export const store = configureStore({
    reducer: { 
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        // [tokenApi.reducerPath]: tokenApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([authApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;