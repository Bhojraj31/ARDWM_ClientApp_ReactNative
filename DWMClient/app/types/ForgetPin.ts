/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- ForgetPIN Types
* @Type:- Interface
* @Role:- Create Types for ForgetPIN
* @Sprint:- Sprint 1.0 -- Jira ID DRN-10
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  08-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

export interface ForgetPinRequest {}

export interface ForgetPinResponse {
    status: string,
    reasonCode:string
}