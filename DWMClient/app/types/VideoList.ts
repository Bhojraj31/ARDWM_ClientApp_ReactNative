/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Video List
* @Type:- Interface
* @Role:- Create Types for Video List
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Chirag Sharma
* @Created on:- 30-11-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

interface reqDataListObj { }

interface bodyEntityDataListObj {
    entityName: string;
    lastSyncDateTime: string;
    requestDataList: [reqDataListObj] | [];
}

interface entityResDataListObj {
    entityName: string;
    pageNo: number;
    pageSize: number;
    lastSyncDateTime: string; //27/11/2023 12:58:47,
    responseData: {
        status: string;
        reasonCode: null;
        responseObject: null;
        responseListObject: [videoListObj];
        refreshToken: null;
        accessToken: null;
    };
}
interface videoListObj   {
    videoId: string;
    videoName: string;
    videoCategory: string;
    tooltipText: string;
    isDownloadAllowed:string;
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

export interface videoListRequest {
    entityDataList: [bodyEntityDataListObj];
    partyId: string;
}
export interface videoListResponse {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    code: number;

    status: string;
    reasonCode: string;

    responseObject: {
        partyId: string;
        entityDataList: [entityResDataListObj];
    };
    responseListObject: null;
    refreshToken: null;
    accessToken: null;
}
