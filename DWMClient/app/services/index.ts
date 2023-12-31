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

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: serverPaths.DWMServerPathV15,
        prepareHeaders: async headers => {
            if (apiType.value == apiTypes.token) {
                headers.set('appversion', '7.3');
            } else if (apiType.value == apiTypes.get) {
                headers.set('Token', store.getState().token.responseObject,)
                headers.set('sourceSystemId', '31009');
                headers.set('buId', '27808');
                headers.set('macId', '166C6788-E2E9-4C9C-8C76-FF405C2DD364');
                headers.set('Content-Type', 'application/json');
                headers.set('appversion', '1.1');
            } else if (apiType.value == apiTypes.post) {
                headers.set('Token', store.getState().token.responseObject,)
                headers.set('sourceSystemId', '31010');
                headers.set('buId', '27808');
                headers.set('macId', '166C6788-E2E9-4C9C-8C76-FF405C2DD364');
                headers.set('Content-Type', 'application/json');
                headers.set('appversion', '14.0');
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: [],
})
