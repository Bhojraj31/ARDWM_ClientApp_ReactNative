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
import {ValidateOTPRequest, ValidateOTPResponse} from '../types/ValidateOtp';
import {store} from '../store';
import {apiTypes, endpoints} from '../assets/constants/ApiConstants';

export const ValidateOtpService = api.injectEndpoints({
  endpoints: build => ({
    validateOTP: build.query<ValidateOTPResponse, ValidateOTPRequest>({
      query: () => ({
        method: 'GET',
        url: endpoints.validateOtp,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLazyValidateOTPQuery} = ValidateOtpService;
