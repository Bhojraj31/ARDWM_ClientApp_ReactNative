/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Create Pin Types
 * @Type:- Interface
 * @Role:- Create Types for Create Pin
 * @Sprint:- Sprint 1.0 -- Jira
 * @Created by:-Yashwant Lohar
 * @Created on:-  07-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

export interface ResendOTPRequest {}

export interface ResendOTPResponse {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  status: string;
  reasonCode: string;
  responseObject: {
    partyId: string;
    userId: string;
    countrycodeFlag: string;
    createdDate: string;
  };
  responseListObject: null;
  refreshToken: null;
  accessToken: null;
}
