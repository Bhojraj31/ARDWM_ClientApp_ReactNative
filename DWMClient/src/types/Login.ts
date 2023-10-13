/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- login Types
* @Type:- Interface
* @Role:- Create Types for login
* @Sprint:- Sprint 1.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  00-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/
export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    isError : boolean,
    isSuccess : boolean,
    isLoading : boolean, 
    code: number,
    status: string,
    data: {
        access_token: string,
        refresh_token: string
    }
}