import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface OtpState {
  data: {
    status: string;
    reasoncode: string;
    responseObject: string;
    responseListObject: string;
    refreshToken: string;
    accessToken: string;
  };
}

const initialState: OtpState = {
  data: {
    status: '',
    reasoncode: '',
    responseObject: '',
    responseListObject: '',
    refreshToken: '',
    accessToken: '',
  },
};

export const otpSlice = createSlice({
  name: 'OTP',
  initialState,
  reducers: {
    setOtp: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      console.log('response data from store....', state.data.status);
    },
  },
});

// Action creators are generated for each case reducer function
export const {setOtp} = otpSlice.actions;

export default otpSlice.reducer;
