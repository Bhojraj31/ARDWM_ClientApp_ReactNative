export interface CreatePinRequest {
    // pin: string; 
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
    userId: string
}

export interface CreatePinResponse {
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    reasonCode: string,
    status: string,
    access_token: string,
    refresh_token: string
}
