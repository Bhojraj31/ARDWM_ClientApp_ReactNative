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
import {ResendOTPResponse, ResendOTPRequest} from '../types/ResendOtp';
import {store} from '../store';
import {apiTypes, endpoints} from '../assets/constants/ApiConstants';

export const ResendOtpService = api.injectEndpoints({
  endpoints: build => ({
    ResendOTP: build.query<ResendOTPResponse, ResendOTPRequest>({
      query: () => ({
        method: 'GET',
        url: endpoints.resendOtp,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLazyResendOTPQuery} = ResendOtpService;
