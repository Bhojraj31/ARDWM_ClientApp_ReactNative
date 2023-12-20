/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- notificationsSyncSlice
* @Type:- Functional Component
* @Role:- Create Slice for notificationsSync
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  14-12-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface notificationResObj {
    partyId: string;
    notificationText: string;
    astModifiedDateTime: string;
    isReadFlag: string;
    notifyTypeId: string;
    notifyQueueId: string;
    notificationOnPartyId: string;
    notifyRefTypeId: string;
    notifyRefRecordId: string;
    mappedValue1: string;
    mappedValue2: string;
    mappedValue3: string;
}


export interface ApplicationState {
    responseListObject: [notificationResObj]
}

const initialState: ApplicationState = {
    responseListObject: [{
        partyId: '',
        notificationText: '',
        astModifiedDateTime: '',
        isReadFlag: '',
        notifyTypeId: '',
        notifyQueueId: '',
        notificationOnPartyId: '',
        notifyRefTypeId: '',
        notifyRefRecordId: '',
        mappedValue1: '',
        mappedValue2: '',
        mappedValue3: ''
    }]

};

export const notificationsSync = createSlice({
    name: 'notificationsSync',
    initialState,
    reducers: {
        setNotificationsSyncData: (state, action: PayloadAction<any>) => {
            state.responseListObject = action.payload;
            console.log('NotificationsSyncData aaya', state.responseListObject);
        },

        logout: () => initialState,
    },
})

export const { setNotificationsSyncData } = notificationsSync.actions;
export default notificationsSync.reducer;