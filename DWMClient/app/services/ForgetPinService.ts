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
import { ForgetPinRequest, ForgetPinResponse } from '../types/ForgetPin';
export const ForgetPinService = api.injectEndpoints({
    endpoints: (build) => ({
        forgetPin: build.mutation<ForgetPinResponse, ForgetPinRequest>({
            query: () => ({
                method:'GET',
                url:endpoints.forgetPin
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useForgetPinMutation } = ForgetPinService;
