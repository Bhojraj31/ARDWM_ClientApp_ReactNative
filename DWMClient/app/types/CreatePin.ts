/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Create Pin Types
 * @Type:- Interface
 * @Role:- Create Types for Create Pin
 * @Sprint:- Sprint 1.0 -- Jira
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  07-10-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

export interface CreatePinRequest {
  buId: string;
  contactPartyId: string;
  partyId: string;
  firstName: string;
  lastName: string;
  emailId: string;
  city: string;
  address1: string;
  address2: string;
  address3: string;
  Country: string;
  State: string;
  PinCode: string;
  gender: string;
  expinyr: string;
  expinmon: string;
  organization: string;
  designation: string;
  mobileNo: string;
  lastModifiedBy: string;
  lastModifiedDateTime: string;
  sourceSystemobject: string;
  sourceSystemId: string;
  macId: string;
  campaign: string;
  flag: string;
  UTM1: string;
  UTM2: string;
  UTM3: string;
  currentSavings: string;
  UtmContent: string;
  UtmTerm: string;
  longitude: string;
  latitude: string;
  pin: string;
  arn: string;
  countryCodeId: string;
  userId: string;
}

export interface CreatePinResponse {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  reasonCode: string;
  status: string;
  access_token: string;
  refresh_token: string;
}
