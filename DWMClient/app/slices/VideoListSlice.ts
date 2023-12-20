/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- videoListSlice
* @Type:- Functional Component
* @Role:- Create Slice for videoList
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  14-12-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface videoListObj {
    videoId: string;
    videoName: string;
    videoCategory: string;
    tooltipText: string;
    isDownloadAllowed: string;
    isOnlineStreamAllowed: string;
    applicableTags: string;
    lastModifiedBy: string;
    variationId: string;
    variationText: string;
    language: string;
    humorLevel: string;
    videoDownloadURL: string;
    bucket: string;
    userName: string;
    password: string;
    accessKeyID: string;
    secretAccessKey: string;
    latestVersion: string;
    latestupdatetimestamp: string;
    lastModifiedDateTime: string;
    videoCategoryID: string;
    languageID: string;
    humorLevelID: string;
    variationNo: string;
    subtitleFileURL: string;
    thumbnailURL: string;
}

export interface ApplicationState {
    responseListObject: [videoListObj]
}

const initialState: ApplicationState = {
    responseListObject: [{
        videoId: '',
        videoName: '',
        videoCategory: '',
        tooltipText: '',
        isDownloadAllowed: '',
        isOnlineStreamAllowed: '',
        applicableTags: '',
        lastModifiedBy: '',
        variationId: '',
        variationText: '',
        language: '',
        humorLevel: '',
        videoDownloadURL: '',
        bucket: '',
        userName: '',
        password: '',
        accessKeyID: '',
        secretAccessKey: '',
        latestVersion: '',
        latestupdatetimestamp: '',
        lastModifiedDateTime: '',
        videoCategoryID: '',
        languageID: '',
        humorLevelID: '',
        variationNo: '',
        subtitleFileURL: '',
        thumbnailURL: ''
    }]

};

export const videoList = createSlice({
    name: 'videoList',
    initialState,
    reducers: {
        setVideoListData: (state, action: PayloadAction<any>) => {
            state.responseListObject = action.payload;
            console.log('VideoListData aaya', state.responseListObject);
        },

        logout: () => initialState,
    },
})

export const { setVideoListData } = videoList.actions;
export default videoList.reducer;