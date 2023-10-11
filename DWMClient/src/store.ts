import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { authApi } from './service/index';

export const store = configureStore({
    reducer: { 
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([authApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;