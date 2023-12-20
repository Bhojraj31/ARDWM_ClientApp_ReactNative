/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- wealthstrategySlice
* @Type:- Functional Component
* @Role:- Create Slice for wealthstrategy
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  14-12-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ApplicationState {
    responseObject: {
        currentWealth: string;
        wealthStrategyId: string;
        wealthStrategyName: string;
        annualSaving: string;
        year: string;
        currentTargetWealth: string;
        equityAllocation: string;
        debtAllocation: string;
        arTargetWealth: string;
        partyId: string;
        putOption: string;
        planB: string;
        lastModifiedBy: string;
        lastModifiedDateTime: string;
        cashAmount: string;
        cashYear: string;
        wealthStrategyYear: string;
    };
}

const initialState: ApplicationState = {
    responseObject: {
        currentWealth: '',
        wealthStrategyId: '',
        wealthStrategyName: '',
        annualSaving: '',
        year: '',
        currentTargetWealth: '',
        equityAllocation: '',
        debtAllocation: '',
        arTargetWealth: '',
        partyId: '',
        putOption: '',
        planB: '',
        lastModifiedBy: '',
        lastModifiedDateTime: '',
        cashAmount: '',
        cashYear: '',
        wealthStrategyYear: ''
    }
};

export const wealthstrategy = createSlice({
    name: 'wealthstrategy',
    initialState,
    reducers: {
        setWealthstrategyData: (state, action: PayloadAction<any>) => {
            state.responseObject = action.payload;
            console.log('WealthstrategyData aaya', state.responseObject);
        },

        logout: () => initialState,
    },
})

export const { setWealthstrategyData } = wealthstrategy.actions;
export default wealthstrategy.reducer;