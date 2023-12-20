/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Contact
* @Type:- Interface
* @Role:- Create Types for Contact
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Chirag Sharma
* @Created on:- 27-11-2023
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
        responseObject: subResponseObject;
        responseListObject: null;
        refreshToken: null;
        accessToken: null;
    };
}
interface subResponseObject {
    userId: number, 
    firstName: string,
    lastName: string,
    foFlag: number,
    additionalEmailID: string,
    salutation: string,
    accountElapsedDate: string,
    zeroFeeLeftDate: string,
    email: string,
    mobileNo: number,
    lastModifiedBy: string,
    lastModifiedDateTime: string,
    latitude: number,
    longitude: number,
    accountOpenDate: string,
    rmPartyId: string,
    gender: string,
    arccNo: string,
    clientCode: string,
    rmNo: string,
    rmName: string,
    isShowRebalance: boolean,
    countryCodeID: string,
    imageFilePath: string,
    accountOpeningStatus: string,
    targetAmount: string,
    contributionAnnual: string,
    yearDiff: string,
    isWealthStrategySet: boolean,
    isCashPortfolioSet: boolean,
    isTaxPortfolioSet: boolean,
    lastlogindate: string,
    communicationMobileNo: string,
    isShowPortfolio: boolean,
    humor: string,
    language: string,
    failureReason: string,
    isDebugenable: string,
    stageId: string,
    groupCode: string,
    contactsFamilyDataList:[contactsFamilyDataList],
    countryCode: string
}
interface contactsFamilyDataList {
    firstName: string,
    relationShipId: string,
    partyId: string,
    isWealthStrategySet: boolean,
    isCashPortfolioSet: boolean,
    isTaxPortfolioSet: boolean,
    lastName: string,
    email: string,
    mobileNo: string,
    arccNo: string,
    panNo: string,
    isShowRebalance: boolean,
    accountOpenDate: string,
    zeroFeeLeftDate: string,
    clientCode: string,
    dpId: string,
    dateActivated: string,
    accountElapsedDate: string,
    familyId: string,
    groupId: string,
    isTransactionAccessAllowed: boolean,
    isLoginAccessAllowed: boolean,
    currentStageID: string,
    isAccountOpen: boolean,
    accountOpenStatus: string,
    failureReason: string,
    gender: string,
    salutation: string,
    additionalEmailInCC: string
}



export interface ContactRequest {
    entityDataList: [bodyEntityDataListObj];
    partyId: string;
}
export interface ContactResponse {
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
