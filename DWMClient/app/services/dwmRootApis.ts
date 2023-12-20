/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- AddLeadCommonService
* @Type:- type Script
* @Role:- Added endPoint for Forget Pin
* @Sprint:- Sprint 1.0 -- Jira ID DRN-10
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  08-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { api } from './index';
import { endpoints } from '../assets/constants/ApiConstants';
import { ContactRequest, ContactResponse } from '../types/Contact';
import { wealthStrategyConfigRequest, wealthStrategyConfigResponse } from '../types/WealthStrategyCOnfig';
import { wealthStrategyListRequest, wealthStrategyListResponse } from '../types/wealthStrategyList';
import { wealthStrategyRequest, wealthStrategyResponse } from '../types/WealthStrategy';
import { applicationDataRequest, applicationDataResponse } from '../types/ApplicationData';
import { videoListRequest, videoListResponse } from '../types/VideoList';
import { notificationsSyncRequest, notificationsSyncResponse } from '../types/NotificationsSync';
// import { wealthStrategyFlagRequest, wealthStrategyFlagResponse } from '../types/wealthStrategyFlag';
// import { schemeInformationResponse } from '../types/SchemeInformation';
// import { videoListRequest, videoListResponse } from '../types/VideoList';
// import { wealthStrategyRMRequest, wealthStrategyRMResponse } from '../types/WealthStrategyRM';
// import { notificationsSyncRequest, notificationsSyncResponse } from '../types/NotificationsSync';
// import { configValueDataRequest, configValueDataResponse } from '../types/ConfigValueData';
// import { applicationDataRequest, applicationDataResponse } from '../types/ApplicationData';
// import { FamilyMemberSaveRequest, FamilyMemberSaveResponse } from '../types/FamilyMemberSave';

export const DwmRootApiService = api.injectEndpoints({
    endpoints: (build) => ({
        contact: build.mutation<ContactResponse, ContactRequest>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: endpoints.bulkDataSync
            }),
        }),

        wealthStrategy: build.mutation<wealthStrategyResponse, wealthStrategyRequest>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: endpoints.bulkDataSync
            }),
        }),

        // wealthStrategyConfig: build.mutation<wealthStrategyConfigResponse, wealthStrategyConfigRequest>({
        //     query: (payload) => ({
        //         body: payload,
        //         method: 'POST',
        //         url: endpoints.bulkDataSync
        //     }),
        // }),

        // wealthStrategyList: build.mutation<wealthStrategyListResponse, wealthStrategyListRequest>({
        //     query: (payload) => ({
        //         body: payload,
        //         method: 'POST',
        //         url: endpoints.bulkDataSync
        //     }),
        // }),

        application: build.mutation<applicationDataResponse, applicationDataRequest>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: endpoints.bulkDataSync
            }),
        }),

        videoList: build.mutation<videoListResponse, videoListRequest>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: endpoints.bulkDataSync
            }),
        }),

        notificationsSync: build.mutation<notificationsSyncResponse, notificationsSyncRequest>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: endpoints.bulkDataSync
            }),
        }),

        // wealthStrategyRM: build.mutation<wealthStrategyRMResponse, wealthStrategyRMRequest>({
        //     query: (payload) => ({
        //         body: payload,
        //         method: 'POST',
        //         url: endpoints.bulkDataSync
        //     }),
        // }),

        // wealthStrategyFlag: build.query<wealthStrategyFlagResponse, wealthStrategyFlagRequest>({
        //     query: (data) => ({
        //         method: 'GET',
        //         url: `contact/wealthstrategy/flag?mobileNo=${data.mobileNo}&countryCodeId=${data.mobileNo}`,
        //     }),
        // }),

        // schemeInformation: build.mutation<schemeInformationResponse, schemeInformationResponse>({
        //     query: (payload) => ({
        //         body: payload,
        //         method: 'POST',
        //         url: endpoints.bulkDataSync
        //     }),
        // }),

        // configValue: build.mutation<configValueDataResponse, configValueDataRequest>({
        //     query: (payload) => ({
        //         body: payload,
        //         method: 'POST',
        //         url: endpoints.bulkDataSync
        //     }),
        // }),

        // familyMemberSave: build.mutation<FamilyMemberSaveResponse, FamilyMemberSaveRequest>({
        //     query: (payload) => ({
        //         body: payload,
        //         method: 'POST',
        //         url: endpoints.familyMemberSave
        //     }),
        // }),

    }),
    overrideExisting: true,
});

export const {
    useContactMutation,
    useWealthStrategyMutation,
    useApplicationMutation,
    useVideoListMutation,
    useNotificationsSyncMutation
    // useWealthStrategyConfigMutation,
    // useWealthStrategyListMutation,
    // useLazyWealthStrategyFlagQuery, 
    // useSchemeInformationMutation, 
    // useWealthStrategyRMMutation, 
} = DwmRootApiService;
