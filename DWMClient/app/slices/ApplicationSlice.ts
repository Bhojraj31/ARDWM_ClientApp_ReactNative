/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- applicationSlice
* @Type:- Functional Component
* @Role:- Create Slice for application
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  14-12-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface subResListObj {
    applicationId: string;
    applicationCategory: string;
    downloadURL: string;
    latestVersion: string;
    latestUpdateDateTime: string;  //21/08/2016 17:43:33
}

export interface ApplicationState {
    responseListObject: [subResListObj]
}

const initialState: ApplicationState = {
    responseListObject: [{
        applicationId: '',
        applicationCategory: '',
        downloadURL: '',
        latestVersion: '',
        latestUpdateDateTime: '',  //21/08/2016 17:43:33
    }]

};

export const application = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setApplicationData: (state, action: PayloadAction<any>) => {
            state.responseListObject = action.payload;
            console.log('ApplicationData aaya', state.responseListObject);
        },

        logout: () => initialState,
    },
})

export const { setApplicationData } = application.actions;
export default application.reducer;