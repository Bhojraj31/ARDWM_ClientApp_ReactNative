// /*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
// /**
// * @param - NA
// * @return -- NA
// * @Name:- ForgetPinSlice
// * @Type:- Functional Component
// * @Role:- Create Slice for forgetPin
// * @Sprint:- Sprint 1.0 -- Jira IN DRN-10
// * @Created by:- Bhojraj Singh Shekhawat
// * @Created on:-  06-10-2023
// * @Last Modified by:- No
// * @Last modified on:- No
// */
// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface ForgetPinState {
//     isError : boolean,
//     isSuccess : boolean,
//     isLoading : boolean, 
//     status: string,
//     reasonCode: string
// }

// export const initialState: ForgetPinState = {
//     isError : false,
//     isSuccess : false,
//     isLoading : false, 
//     status: '',
//     reasonCode: ''
// };


// export const forgetPin = createSlice({
//     name: 'forgetPin',
//     initialState,
//     reducers: {
//         setForgetPin: (state, action: PayloadAction<string>) => {
//             state.responseObject = action.payload;
//             console.log('Token aaya', state.responseObject);
            
//         },
//         logout: () => initialState,
//     },
// });

// export const { setForgetPin } = forgetPin.actions;
// export default forgetPin.reducer;
