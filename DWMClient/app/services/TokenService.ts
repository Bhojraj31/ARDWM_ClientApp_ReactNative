/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- tokenService
* @Type:- Functional Component
* @Role:- Added endPoint for getToken
* @Sprint:- Sprint 1.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  06-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { api } from './index'
import { TokenRequest, TokenResponse } from '../types/Token';
import { endpoints } from '../assets/constants/ApiConstants';

export const tokenService = api.injectEndpoints({
    endpoints: (build) => ({
        getToken: build.query<TokenResponse, TokenRequest>({
            query: () => endpoints.token,
        })
    }),
    overrideExisting: false,
});

export const { useLazyGetTokenQuery } = tokenService
