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

export interface ResendOtpState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  resend: string;
  data: {
    status: string;
    reasonCode: string;
    responseObject: {
      partyId: string;
      userId: string;
      countrycodeFlag: string;
      createdDate: string;
    };
    responseListObject: string;
    refreshToken: string;
    accessToken: string;
  };
}

const initialState: ResendOtpState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  resend: '',
  data: {
    status: '',
    reasonCode: '',
    responseObject: {
      partyId: '',
      userId: '',
      countrycodeFlag: '',
      createdDate: '',
    },
    responseListObject: '',
    refreshToken: '',
    accessToken: '',
  },
};

// console.log('token',initialState.token);

export const ResendApi = createSlice({
  name: 'resendOtp',
  initialState,
  reducers: {
    setResend: (state, action: PayloadAction<any>) => {
      state.resend = action.payload;
    },
    // setToken: (state, action: PayloadAction<string>) => {
    //     state.token = action.payload;
    // },
  },
});

export const {setResend} = ResendApi.actions;
export default ResendApi.reducer;
