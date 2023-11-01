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

export interface WorkSiteOtpState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  workSite: string;
  data: {
    status: string;
    reasonCode: string;
    responseObject: string;
    responseListObject: string;
    refreshToken: string;
    accessToken: string;
  };
}

const initialState: WorkSiteOtpState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  workSite: '',
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

export const WorkSiteApi = createSlice({
  name: 'workSiteOtp',
  initialState,
  reducers: {
    setWorkSite: (state, action: PayloadAction<any>) => {
      state.workSite = action.payload;
    },
    // setToken: (state, action: PayloadAction<string>) => {
    //     state.token = action.payload;
    // },
  },
});

export const {setWorkSite} = WorkSiteApi.actions;
export default WorkSiteApi.reducer;
