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
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface OnBoardingState {
    data: {
        partId: string,
        userId: string,
        mobNo: string,
        selectedCountryCode: string
    };
}

export const initialState: OnBoardingState = {
    data: {
        partId: '',
        userId: '',
        mobNo: '',
        selectedCountryCode: ''
    },
};

export const onBoardingSlice = createSlice({
    name: 'onBoarding',
    initialState,
    reducers: {
        onBoarding: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        },
    },
});

export const { onBoarding } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
