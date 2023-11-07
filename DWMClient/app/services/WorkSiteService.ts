/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Country Code
 * @Type:- Functional Component
 * @Role:- Added endPoint for Create Pin
 * @Sprint:- Sprint 1.0 -- Jira ID DRN-7
 * @Created by:- Yashwant Lohar
 * @Created on:-  06-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import {api} from './index';
import {WorkSiteOTPRequest, WorkSiteOTPResponse} from '../types/WorkSite';
import {apiTypes, endpoints} from '../assets/constants/ApiConstants';

export const WorkSiteService = api.injectEndpoints({
  endpoints: (build) => ({
    workSiteList: build.mutation<WorkSiteOTPResponse, WorkSiteOTPRequest>({
      query: payload => ({
        body: payload,
        method: apiTypes.post,
        url: endpoints.workSite,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useWorkSiteListMutation} = WorkSiteService;
