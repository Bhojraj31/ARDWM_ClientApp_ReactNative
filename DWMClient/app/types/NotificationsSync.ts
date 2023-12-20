/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Notifications Sync
* @Type:- Interface
* @Role:- Create Types for Notifications Sync
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Chirag Sharma
* @Created on:- 28-11-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

interface reqDataListObj { }

interface bodyEntityDataListObj {
    entityName: string;
    lastSyncDateTime: string;
    requestDataList: [];
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
        responseListObject: [notificationResObj];
        refreshToken: null;
        accessToken: null;
    };
}

interface notificationResObj  {
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

export interface notificationsSyncRequest {
    contactIds: string;
    entityDataList: [bodyEntityDataListObj];
    partyId: string;
}
export interface notificationsSyncResponse {
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
