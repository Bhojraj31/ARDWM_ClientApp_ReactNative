import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    user: Object | null;
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState = {
    user: null,
    accessToken: '', 
    refreshToken: '', 
};



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload; 
        },
        logout: () => initialState,
    },
});

export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer;
