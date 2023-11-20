/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- AddLeadCommonService
* @Type:- typeScript
* @Role:- Added endPoint for Create Pin
* @Sprint:- Sprint 1.0 -- Jira ID DRN-7
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  06-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

import { api } from './index';
import { LoginRequest, LoginResponse } from '../types/Login';
import { CreatePinRequest, CreatePinResponse } from '../types/CreatePin';
import { endpoints } from '../assets/constants/ApiConstants';

export const AddLeadCommonService = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (payload) => ({
        body: payload,
        method: 'POST',
        url: endpoints.login
        
      }),
    }),
    createPin: build.mutation<CreatePinResponse, CreatePinRequest>({
      query: (payload) => ({
        body: payload,
        method: 'POST',
        url: endpoints.addLeadCommon
      }),
    })
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useCreatePinMutation } = AddLeadCommonService;
