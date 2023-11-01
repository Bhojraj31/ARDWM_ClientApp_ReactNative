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

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CountryApiState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  status: string,
  reasonCode: string,
  responseObject: string,
  country:string,
  responseListObject: [
    {
      codeValueId: string,
      codeValue: string,
      mappedValue1: string,
      mappedValue2: string,
      mappedValue3: string,
      codeTypeId: string,
    },
  ];
}

const initialState: CountryApiState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  status: '',
  reasonCode: '',
  responseObject: '',
  country: '',
  responseListObject: [
    {
      codeValueId: '',
      codeValue: '',                                                      
      mappedValue1: '',                                                     
      mappedValue2: '',                                                     
      mappedValue3: '',                                                     
      codeTypeId: '',                                                     
    },
  ],
};

// console.log('token',initialState.token);

export const CountryApi = createSlice({
  name: 'countryApi',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<any>) => {
      state.country = action.payload;
    },
  },
});

export const { setCountry } = CountryApi.actions;
export default CountryApi.reducer;
