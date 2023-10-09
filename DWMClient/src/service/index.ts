import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from '../store'

export const authApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dwm-stage.anandrathiwealth.in/WMService/api/v15",
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