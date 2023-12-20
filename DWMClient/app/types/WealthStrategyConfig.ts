/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- Wealth Strategy Config
* @Type:- Interface
* @Role:- Create Types for Wealth Strategy Config
* @Sprint:- Sprint 2.0 -- Jira 
* @Created by:- Chirag Sharma
* @Created on:- 28-11-2023
* @Last Modified by:- No
* @Last modified on:- No
*/

interface reqDataListObj { }

interface bodyEntityDataListObj {
    entityName: string,
    lastSyncDateTime: string
}


interface entityResDataListObj {
    entityName: string;
    pageNo: number;
    pageSize: number;
    lastSyncDateTime: string; //27/11/2023 12:58:47,
    responseData: {
        status: string;
        reasonCode: null;
        responseObject: subResponseObject;
        responseListObject: null;
        refreshToken: null;
        accessToken: null;
    };
}
interface subResponseObject {
    defaultCurrentWealth: string,
    minimumCurrentWealth: string,
    maximumCurrentWealth: string,
    defaultAnnualSaving: string,
    minimumAnnualSaving: string,
    maximumAnnualSaving: string,
    defaultTimeHorizon: string,
    minimumTimeHorizon: string,
    maximumTimeHorizon: string,
    equityAllocation: string,
    debtAllocation: string,
    defaultAnnualSavingPercentage: string,
    expectedEquityReturn: string,
    expectedDebtReturn: string,
    expectedportfolioreturns60: string,
    expectedportfolioreturns70: string,
    expectedportfolioreturns80: string,
    expectedportfolioreturns90: string,
    expectedportfolioreturns100: string,
    expectedportfolioreturnsNoPut60: string,
    expectedportfolioreturnsNoPut70: string,
    expectedportfolioreturnsNoPut80: string,
    expectedportfolioreturnsNoPut90: string,
    expectedportfolioreturnsNoPut100: string,
    directEquityandpms: string,
    equityMutualFunds: string,
    bankBalanceandFD: string,
    debtMutualFundsorBonds: string,
    defaultNiftyReturn: string,
    minNiftyReturn: string,
    maxNiftyReturn: string,
    adjustedequityallocationput60: string,
    adjustedequityallocationput70: string,
    adjustedequityallocationput80: string,
    adjustedequityallocationput90: string,
    adjustedequityallocationput100: string,
    adjustedequityallocationnoput60: string,
    adjustedequityallocationnoput70: string,
    adjustedequityallocationnoput80: string,
    adjustedequityallocationnoput90: string,
    adjustedequityallocationnoput100: string,
    adjusteddebtallocationput60: string,
    adjusteddebtallocationput70: string,
    adjusteddebtallocationput80: string,
    adjusteddebtallocationput90: string,
    adjusteddebtallocationput100: string,
    adjusteddebtallocationnoput60: string,
    adjusteddebtallocationnoput70: string,
    adjusteddebtallocationnoput80: string,
    adjusteddebtallocationnoput90: string,
    adjusteddebtallocationnoput100: string,
    revisedequityput60: string,
    revisedequityput70: string,
    revisedequityput80: string,
    revisedequityput90: string,
    revisedequityput100: string,
    revisedequitynoput60: string,
    revisedequitynoput70: string,
    revisedequitynoput80: string,
    revisedequitynoput90: string,
    revisedequitynoput100: string,
    reviseddebtput60: string,
    reviseddebtput70: string,
    reviseddebtput80: string,
    reviseddebtput90: string,
    reviseddebtput100: string,
    reviseddebtnoput60: string,
    reviseddebtnoput70: string,
    reviseddebtnoput80: string,
    reviseddebtnoput90: string,
    reviseddebtnoput100: string,
    equityMarketInsuranceCost: string,
    equityMarketInsuranceCostNoPut: string,
    minAmtWealthPortFolio: string,
    minAmtCashPortFolio: string,
    minAmtTaxSavingPortFolio: string,
    wealthPortFolioMidCapPercentage: string,
    wealthPortFolioLargeCapPercentage: string,
    minThresholdPercentage: string,
    wealthPortFolioLargeCapProductCount: string,
    wealthPortFolioMidCapProductCount: string,
    wealthPortFolioDebtProductCount: string,
    cashPortFolioProductCount: string,
    lastModifiedDateTime: string,
    wealthPortfolioJson: string,
    wealthPortfolioJsonNoPut: string,
    cashPortfolioJson: string,
    niftyJson: string,
    numberOfYearsForSensitivityAnalysis: string,
    debtMutualFundAlpha: string,
    savingGrowth: string,
    directEquityAndPMSGrowth: string,
    expectedPortfolioReturnPut20_60: string,
    expectedPortfolioReturnPut20_70: string,
    expectedPortfolioReturnPut20_80: string,
    expectedPortfolioReturnPut20_90: string,
    expectedPortfolioReturnPut20_100: string,
    adjustedEquityAllocationPut20_60: string,
    adjustedEquityAllocationPut20_70: string,
    adjustedEquityAllocationPut20_80: string,
    adjustedEquityAllocationPut20_90: string,
    adjustedEquityAllocationPut20_100: string,
    adjustedDebtAllocationPut20_60: string,
    adjustedDebtAllocationPut20_70: string,
    adjustedDebtAllocationPut20_80: string,
    adjustedDebtAllocationPut20_90: string,
    adjustedDebtAllocationPut20_100: string,
    revisedEquityPut20_60: string,
    revisedEquityPut20_70: string,
    revisedEquityPut20_80: string,
    revisedEquityPut20_90: string,
    revisedEquityPut20_100: string,
    revisedDebtPut20_60: string,
    revisedDebtPut20_70: string,
    revisedDebtPut20_80: string,
    revisedDebtPut20_90: string,
    niftyJsonPut20: string,
    productJsonPut20: string,
    titleput100: string,
    titleNoput: string,
    equityMarketInsuranceCostPut20: string,
    wealthPortfolioJsonWithPlanB: string,
    wealthPortfolioJsonNoPutWithPlanB: string,
    niftyJsonPutWithPlanB: string,
    niftyJsonNoPutWithPlanB: string,
    expectedSPMagnifierReturns: string,
    expectedSPAccelleratorReturns: string,
    spAllocation: string,
    expectedportfolioreturnsPutWithPlanB60: string,
    expectedportfolioreturnsPutWithPlanB70: string,
    expectedportfolioreturnsPutWithPlanB80: string,
    expectedportfolioreturnsPutWithPlanB90: string,
    expectedportfolioreturnsPutWithPlanB100: string,
    expectedportfolioreturnsNoPutWithPlanB60: string,
    expectedportfolioreturnsNoPutWithPlanB70: string,
    expectedportfolioreturnsNoPutWithPlanB80: string,
    expectedportfolioreturnsNoPutWithPlanB90: string,
    expectedportfolioreturnsNoPutWithPlanB100: string,
    adjustedequityallocationputWithPlanB60: string,
    adjustedequityallocationputWithPlanB70: string,
    adjustedequityallocationputWithPlanB80: string,
    adjustedequityallocationputWithPlanB90: string,
    adjustedequityallocationputWithPlanB100: string,
    adjustedequityallocationnoputWithPlanB60: string,
    adjustedequityallocationnoputWithPlanB70: string,
    adjustedequityallocationnoputWithPlanB80: string,
    adjustedequityallocationnoputWithPlanB90: string,
    adjustedequityallocationnoputWithPlanB100: string,
    adjusteddebtallocationputWithPlanB60: string,
    adjusteddebtallocationputWithPlanB70: string,
    adjusteddebtallocationputWithPlanB80: string,
    adjusteddebtallocationputWithPlanB90: string,
    adjusteddebtallocationputWithPlanB100: string,
    adjusteddebtallocationnoputWithPlanB60: string,
    adjusteddebtallocationnoputWithPlanB70: string,
    adjusteddebtallocationnoputWithPlanB80: string,
    adjusteddebtallocationnoputWithPlanB90: string,
    adjusteddebtallocationnoputWithPlanB100: string,
    dummyTextForPlanBVideo: string,
    descriptionput100: string,
    descriptionNoput: string,
    descriptionput20: string,
    niftyJsonWithoutPut: string,
    awssecretKey: string,
    wealthStrategyMinAmt: string,
    cashStrategyMinAmt: string,
    taxSavingPortFolioAmt: string,
    eqsttxrate: string,
    dsttxrate: string,
    dlttxrate: string,
    eqMFAlphaNNifty: string,
    eqMFAlphaPNifty: string,
    directEqAlphaPNifty: string,
    directEqAlphaNNifty: string,
    
    awsaccessKey: string,
    awsendPoint: string,
    awsendPointWRegion: string,
    awsendPointWRegionUSEast: string
}


export interface wealthStrategyConfigRequest {
    entityDataList: [bodyEntityDataListObj],
    partyId: string
}
export interface wealthStrategyConfigResponse {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    code: number;

    status: string;
    reasonCode: string;

    responseObject: {
        partyId: string;
        entityDataList: [entityResDataListObj];
    };
    responseListObject: null;
    refreshToken: null;
    accessToken: null;
}
