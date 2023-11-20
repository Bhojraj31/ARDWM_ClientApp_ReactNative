/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- store
* @Type:- Functional Component
* @Role:- Store for App
* @Sprint:- Sprint 1.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  05-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import {configureStore} from '@reduxjs/toolkit';
import addLeadCommonReducer from './slices/AddLeadCommonSlice';
import tokenReducer from './slices/tokenSlice';
import countryApi from './slices/CountryApiSlice';
import ValidateApi from './slices/ValidateOtpSlice';
import ResendApi from './slices/ResendOtpSlice';
import WorkSiteApi from './slices/WorkSiteSlice';
import onBoardingReducer from './slices/onBoardingSlice';
import loginUserDetailReducer from './slices/LoginUserDetailSlice'
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {api} from './services/index';

export const store = configureStore({
  reducer: {
    addLeadCommon: addLeadCommonReducer,
    token: tokenReducer,
    country: countryApi,
    validateOtp: ValidateApi,
    resendOtp: ResendApi,
    workSiteOtp: WorkSiteApi,
    onBoarding: onBoardingReducer,
    loginUserDetail: loginUserDetailReducer,
    
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([api.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
