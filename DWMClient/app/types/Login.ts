export interface LoginRequest {
  countryCode: string;
  deviceToken: string;
  userName: string;
  pin: string;
  version: string;
  isRm: string;
}

export interface LoginResponse {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  code: number;
  
  status: string;
  reasonCode: string;
  responseObject: object | null;
  refreshToken: string;
  accessToken: string;
}
