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

export interface CountryApiState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  country: string;

  status: string;
  responseListObject: [
    {
      codeValueId: string;
      codeValue: string;
      codeTypeId: string;
      mappedValue1: string;
    },
  ];
}

const initialState: CountryApiState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  country: '',

  status: '',
  responseListObject: [
    {
      codeValueId: '',
      codeValue: '',
      codeTypeId: '',
      mappedValue1: '',
    },
  ],
};

// console.log('token',initialState.token);

export const CountryApi = createSlice({
  name: 'countryApi',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<any>) => {
      state.responseListObject = action.payload;
    },
  },
});

export const {setCountry} = CountryApi.actions;
export default CountryApi.reducer;
