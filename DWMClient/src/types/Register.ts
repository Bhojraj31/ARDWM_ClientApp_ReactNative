export interface RegisterRequest {
    phone: string,
    password: string
}

export interface RegisterResponse {
    code: number,
    status: number,
    data: any
}