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