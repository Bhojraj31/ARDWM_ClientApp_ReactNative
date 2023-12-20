/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Wealth Strategy List
* @Type:- Interface
* @Role:- Create Types for Wealth Strategy List
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Chirag Sharma
* @Created on:- 30-11-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

interface wsList {
    currentWealth: string;
    wealthStrategyId: string;
    wealthStrategyName: string;
    familyId: string;
    strategyYears: string;
    portfolioName: string;
    currentPortfolioTargetWealth: string;
    annualSaving: string;
    equityAllocation: string;
    debtAllocation: string;
    arTargetWealth: string;
    partyId: string;
    putOption: string;
    lastModifiedDateTime: string;
    cashAmount: string;
    cashYear: string;
    wealthStrategyYear: string;
}

export interface wealthStrategyListRequest {
    familyId: string;
    groupId: string;
    partyId: string;
    serchText: string;
}

export interface wealthStrategyListResponse {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;

    status: string;
    reasonCode: string;

    responseObject: null,
    responseListObject:[]
    refreshToken: null,
    accessToken: null
}