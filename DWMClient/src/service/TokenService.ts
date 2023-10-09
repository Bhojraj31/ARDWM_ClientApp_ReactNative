import { authApi } from './index'
import { TokenRequest, TokenResponse } from '../types/Token';

export const tokenService = authApi.injectEndpoints({
    endpoints: (build) => ({
        getToken: build.query<TokenResponse, TokenRequest>({
            query: () => '/security/getToken/31009', 
        })
    }),
    overrideExisting: false,
});

export const { useGetTokenQuery } = tokenService