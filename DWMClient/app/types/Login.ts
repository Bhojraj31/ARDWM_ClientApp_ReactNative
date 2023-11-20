export interface LoginRequest {
  countryCode: any;
  deviceToken: any;
  userName: any;
  pin: any;
  version: any;
  isRm: any;
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
