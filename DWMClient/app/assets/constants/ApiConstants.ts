/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */ /**
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

export const Domain_stage = {
    DWMUrl: 'https://dwm-stage.anandrathiwealth.in/',
    haddopUrl: 'https://bigdataapi-dwm.anandrathiwealth.in/'
}

export const serverPaths = {
    // Stage Server Paths
    DWMServerPathV1: `${Domain_stage.DWMUrl}WMService/api/v1/`,
    DWMServerPathV15: `${Domain_stage.DWMUrl}WMService/api/v15/`,
    haddopServerPathV6: `${Domain_stage.haddopUrl}DWMManageCore/ClientDashBoard/v6/`
};

export const endpoints = {
    token: 'security/getToken/31009',
    addLeadCommon: 'addLeadCommon',
    countryApi: 'financialStrategy/getCodeValues?codeTypeId=645',
    resendOtp: 'security/otp/resend/1000054308?countryCodeId=645095',
    validateOtp: 'security/otp/validate',
    forgetPin: 'security/pin/forgot/1000001855/645095',
    workSite: 'worksite/participants',
    login: 'security/login',
    dashboardEpoch: 'BulkDataSync/getExportTiming/',
    bulkDataSync: 'BulkDataSync',
    wealthStrategyList: 'wealth/wealthStrategy/getWealthStrategyListNew',
    activityLogList: 'activityLog/LogList',
    clientBadgeCount: 'client/badgeCount',
    modelportfolio: 'configuration/modelportfolio',
    familyMemberSave: 'familyMember/save',
    investRecommendedList: '/AddLogic/schemesAmountPercentage',

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

export var apiResStatus = {
    SUCCESS: 'success',
    FAIL: 'fail'
};

export var apiErrorType = {
    APP_MESSAGE: 'somthing went wrong!!!',
};