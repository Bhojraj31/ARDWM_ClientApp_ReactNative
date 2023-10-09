export interface TokenRequest {}

export interface TokenResponse {
    isError : boolean,
    isSuccess : boolean,
    isLoading : boolean, 
    status: string,
    responseObject: string
}