/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- api
* @Type:- CreateAPI USing RTK Query
* @Role:- Calling Api With Multiple Endpoints and headers
* @Sprint:- Sprint 1.0 -- Jira ID DRN-7
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  06-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from '../store'
import { apiType, apiTypes, serverPaths } from '../assets/constants/ApiConstants';
import { addLeadCommon } from '../slices/AddLeadCommonSlice';


export const api = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: serverPaths.DWMServerPathV15,

    }),
    endpoints: () => ({}),
    tagTypes: [],
})        // prepareHeaders: async (headers) => {
    //     headers.set('appversion', '7.3');
    //     console.log(headers)
    //     return headers
    //     // if (apiType.value == apiTypes.token) {
    //     //     headers.set('appversion', '7.3');
    //     // } else if (apiType.value == apiTypes.get) {
    //     //     headers.set('Token', store.getState().addLeadCommon.token,)
    //     //     console.log('saved Token', store.getState().addLeadCommon.token);
    //     //     headers.set('sourceSystemId', '31010');
    //     //     headers.set('buId', '27808');
    //     //     headers.set('macId', '00:0a:95:9d:68:16');
    //     //     headers.set('appversion', '1.1');
    //     // } else if (apiType.value == apiTypes.post) {
    //     //     headers.set('Token', store.getState().addLeadCommon.token,)
    //     //     console.log('saved Token', store.getState().addLeadCommon.token);
    //     //     headers.set('sourceSystemId', '31010');
    //     //     headers.set('buId', '27808');
    //     //     headers.set('macId', '166C6788-E2E9-4C9C-8C76-FF405C2DD364');
    //     //     headers.set('appversion', '14.0');
    //     //     // headers.set('Cookie', 'JSESSIONID=A1346B4E3259ACC817AA1D1D5B5B7EA6');
    //     // }
    //     // return headers;
    // },