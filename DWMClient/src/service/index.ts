import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from '../store'

export const authApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1",
        prepareHeaders: async (headers) => {
            const { accessToken } = store.getState().auth
            if (accessToken) {
                headers.set('Authorization', `Token ${accessToken}`)
            }
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }),
    endpoints: () => ({}),
    tagTypes: [],
})