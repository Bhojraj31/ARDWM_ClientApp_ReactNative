/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- addLeadCommonSlice
* @Type:- Functional Component
* @Role:- Create Slice for addLeadCommon
* @Sprint:- Sprint 1.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  06-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AddLeadCommonState {
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    reasonCode: string,
    status: string,
    token:string,
    accessToken: string;
    refreshToken: string;
    user: Object | null;
}

const initialState: AddLeadCommonState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    reasonCode: '',
    status: '',
    token:'',
    accessToken: '', 
    refreshToken: '', 
    user: null,
};

console.log('token',initialState.token);

export const addLeadCommon = createSlice({
    name: 'addLeadCommon',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        // setToken: (state, action: PayloadAction<string>) => {
        //     state.token = action.payload; 
        // },
        logout: () => initialState,
    },
});

export const { setUser } = addLeadCommon.actions;
export default addLeadCommon.reducer;
