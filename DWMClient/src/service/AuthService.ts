import { authApi } from './index'
import { LoginRequest, LoginResponse } from '../types/Login'
import { RegisterRequest, RegisterResponse } from '../types/Register'
import { CreatePinRequest, CreatePinResponse } from '../types/CreatePin'

export const authService = authApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: '/auth/login',
            }),
        }),
        createPin: build.mutation<CreatePinRequest, CreatePinResponse>({
            query: (payload) => ({
                body: payload,
                method: 'POST',
                url: '/auth/createPin',
            }),
        })
    }),
    overrideExisting: false,
})

export const { useLoginMutation, useCreatePinMutation } = authService