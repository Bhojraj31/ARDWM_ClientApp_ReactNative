/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- tokenSlice
 * @Type:- Functional Component
 * @Role:- Create Slice for token
 * @Sprint:- Sprint 1.0 -- Jira
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  06-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface LoginUserState {
    data: {
      buId: number;
      familyId: string;
      groupId: string;
      partyID: string;
      sessionToken: string;
      userID: number;
    };
}

export const initialState: LoginUserState = {
    data: {
      buId: 0,
      familyId: '',
      groupId: '',
      partyID: '',
      sessionToken: '',
      userID: 0,
    },
};

export const onBoardingSlice = createSlice({
  name: 'loginUserDetail',
  initialState,
  reducers: {
    loginUserDetail: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const {loginUserDetail} = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
