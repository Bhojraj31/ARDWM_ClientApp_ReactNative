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
import {CountryApiResponse, CountryApinRequest} from '../types/Country';
import {endpoints} from '../assets/constants/ApiConstants';

export const CountryApiService = api.injectEndpoints({
  endpoints: build => ({
    country: build.query<CountryApiResponse, CountryApinRequest>({
      query: () => ({
        method: 'GET',
        url: endpoints.countryApi,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useCountryQuery} = CountryApiService;
