/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Wealth Strategy 
* @Type:- Interface
* @Role:- Create Types for Wealth Strategy 
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
    requestDataList: [reqDataListObj] | [];
}


interface entityResDataListObj {
    entityName: string;
    pageNo: number;
    pageSize: number;
    lastSyncDateTime: string; //"27/11/2023 12:58:47",
    responseData: {
        status: string;
        reasonCode: null;
        responseObject: subResponseObject;
        responseListObject: null;
        refreshToken: null;
        accessToken: null;
    };
}
interface subResponseObject {
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
}


export interface wealthStrategyRequest {
    entityDataList: [bodyEntityDataListObj];
    partyId: string;
}
export interface wealthStrategyResponse {
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
