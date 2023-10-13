/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws *//**
* @param - NA
* @return -- NA
* @Name:- Bhojraj Singh Shekhawat
* @Type:- Functional Component
* @Role:- API Constants
* @Sprint:- Sprint 1.0 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  04-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

export const serverPaths = {
    DWMServerPathV1: 'https://dwm-stage.anandrathiwealth.in/WMService/api/v1',
    DWMServerPathV15: 'https://dwm-stage.anandrathiwealth.in/WMService/api/v15',
};

export const endpoints = {
    token: '/security/getToken/31009',
    addLeadCommon: 'addLeadCommon',
    countryApi: 'financialStrategy/getCodeValues?codeTypeId=645',
};

export const apiTypes = {
    token: 'token',
    get: 'GET',
    post: 'POST',
};

export const appversion = '1.0';

export const apiType = {
    value: '', 
};

export var apiUrlType = '';