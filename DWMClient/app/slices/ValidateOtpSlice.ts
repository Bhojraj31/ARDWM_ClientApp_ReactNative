/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- addLeadCommonSlice
 * @Type:- Functional Component
 * @Role:- Create Slice for addLeadCommon
 * @Sprint:- Sprint 1.0 -- Jira
 * @Created by:-Yashwant Loahr
 * @Created on:-  06-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ValidateOtpState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  validate: string;
  data: {
    status: string;
    reasonCode: string;
    responseObject: string;
    responseListObject: string;
    refreshToken: string;
    accessToken: string;
  };
}

const initialState: ValidateOtpState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  validate: '',
  data: {
    status: '',
    reasonCode: '',
    responseObject: '',
    responseListObject: '',
    refreshToken: '',
    accessToken: '',
  },
};

// console.log('token',initialState.token);

export const ValidateApi = createSlice({
  name: 'validateOtp',
  initialState,
  reducers: {
    setValidate: (state, action: PayloadAction<any>) => {
      state.validate = action.payload;
    },
    // setToken: (state, action: PayloadAction<string>) => {
    //     state.token = action.payload;
    // },
  },
});

export const {setValidate} = ValidateApi.actions;
export default ValidateApi.reducer;