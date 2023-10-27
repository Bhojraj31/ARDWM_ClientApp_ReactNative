import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CountryState {
  data: {
    status: string;
    responseListObject: [
      {
        codeValueId: string;
        codeValue: string;
        mappedValue1: string;
        codeTypeId: string;
      },
    ];
  };
}

const initialState: CountryState = {
  data: {
    status: '',
    responseListObject: [
      {
        codeValueId: '',
        codeValue: '',
        mappedValue1: '',
        codeTypeId: '',
      },
    ],
  },
};

export const CountrySlice = createSlice({
  name: 'Get',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      console.log('response data from store....', state.data.status);
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCountry} = CountrySlice.actions;

export default CountrySlice.reducer;
