/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Application
* @Type:- Interface
* @Role:- Create Types for Application
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Chirag Sharma
* @Created on:- 30-11-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

interface reqDataListObj {
    applicationId: string
}

interface bodyEntityDataListObj {
    entityName: string;
    lastSyncDateTime: string;
    requestDataList: [reqDataListObj];
}

interface subResListObj {
    applicationId: string; 
    applicationCategory: string; 
    downloadURL: string;
    latestVersion: string;
    latestUpdateDateTime: string;  //21/08/2016 17:43:33
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
        responseListObject: [subResListObj]
        refreshToken: null;
        accessToken: null;
    };
}


export interface applicationDataRequest {
    entityDataList: [bodyEntityDataListObj];
    partyId: string;
}
export interface applicationDataResponse {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    code: number;

    status: string;
    reasonCode: string;

    responseObject: {
        partyId: string;
        contactIds: string;
        entityDataList: [entityResDataListObj];
    };
    responseListObject: null;
    refreshToken: null;
    accessToken: null;
}
