/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- contactSlice
* @Type:- Functional Component
* @Role:- Create Slice for contact
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  14-12-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

export interface ContactState {
    responseObject: {
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
        contactsFamilyDataList: [contactsFamilyDataList],
        countryCode: string
    };
}

const initialState: ContactState = {
    responseObject: {
        userId: 0,
        firstName: '',
        lastName: '',
        foFlag: 0,
        additionalEmailID: '',
        salutation: '',
        accountElapsedDate: '',
        zeroFeeLeftDate: '',
        email: '',
        mobileNo: 0,
        lastModifiedBy: '',
        lastModifiedDateTime: '',
        latitude: 0,
        longitude: 0,
        accountOpenDate: '',
        rmPartyId: '',
        gender: '',
        arccNo: '',
        clientCode: '',
        rmNo: '',
        rmName: '',
        isShowRebalance: false,
        countryCodeID: '',
        imageFilePath: '',
        accountOpeningStatus: '',
        targetAmount: '',
        contributionAnnual: '',
        yearDiff: '',
        isWealthStrategySet: false,
        isCashPortfolioSet: false,
        isTaxPortfolioSet: false,
        lastlogindate: '',
        communicationMobileNo: '',
        isShowPortfolio: false,
        humor: '',
        language: '',
        failureReason: '',
        isDebugenable: '',
        stageId: '',
        groupCode: '',
        contactsFamilyDataList: [
            {
                firstName: '',
                relationShipId: '',
                partyId: '',
                isWealthStrategySet: false,
                isCashPortfolioSet: false,
                isTaxPortfolioSet: false,
                lastName: '',
                email: '',
                mobileNo: '',
                arccNo: '',
                panNo: '',
                isShowRebalance: false,
                accountOpenDate: '',
                zeroFeeLeftDate: '',
                clientCode: '',
                dpId: '',
                dateActivated: '',
                accountElapsedDate: '',
                familyId: '',
                groupId: '',
                isTransactionAccessAllowed: false,
                isLoginAccessAllowed: false,
                currentStageID: '',
                isAccountOpen: false,
                accountOpenStatus: '',
                failureReason: '',
                gender: '',
                salutation: '',
                additionalEmailInCC: ''
            }
        ],
        countryCode: ''
    },
};

export const contact = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContactData: (state, action: PayloadAction<any>) => {
            state.responseObject = action.payload;
            console.log('ContactData aaya', state.responseObject);
        },

        logout: () => initialState,
    },
})

export const { setContactData } = contact.actions;
export default contact.reducer;