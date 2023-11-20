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
  responseObject: {
    partyId: number;
    userId: number;
    firstName: string;
    lastName: string;
    isActive: string;
    countrycodeFlag: number;
    currentStageId: string;
    createdDate: number;
  };
}

const initialState: ValidateOtpState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  responseObject: {
    partyId: 0,
    userId: 0,
    firstName: '',
    lastName: '',
    isActive: '',
    countrycodeFlag: 0,
    currentStageId: '',
    createdDate: 0
  }
};

// console.log('token',initialState.token);

export const ValidateApi = createSlice({
  name: 'validateOtp',
  initialState,
  reducers: {
    clientValidateDetail: (state, action: PayloadAction<any>) => {
      state.responseObject = action.payload;
    },
  },
});

export const {clientValidateDetail} = ValidateApi.actions;
export default ValidateApi.reducer;
