/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
* @param - NA
* @return -- NA
* @Name:- tokenSlice
* @Type:- Functional Component
* @Role:- Create Slice for token
* @Sprint:- Sprint 1.0 -- Jira 
* @Created by:- Bhojraj Singh Shekhawat
* @Created on:-  06-10-2023
* @Last Modified by:- No
* @Last modified on:- No
*/
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TokenState {
    isError : boolean,
    isSuccess : boolean,
    isLoading : boolean, 
    status: string,
    responseObject: string
}

export const initialState: TokenState = {
    isError : false,
    isSuccess : false,
    isLoading : false, 
    status: '',
    responseObject: ''
};


export const token = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.responseObject = action.payload;
            console.log('Token aaya', state.responseObject);
            
        },
        logout: () => initialState,
    },
});

export const { setToken } = token.actions;
export default token.reducer;


// bss

// /*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
// /**
// * @param - NA
// * @return -- NA
// * @Name:- tokenSlice
// * @Type:- Functional Component
// * @Role:- Create Slice for token
// * @Sprint:- Sprint 1.0 -- Jira 
// * @Created by:- Bhojraj Singh Shekhawat
// * @Created on:-  06-10-2023
// * @Last Modified by:- No
// * @Last modified on:- No
// */
// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface TokenState {
//     isError : boolean,
//     isSuccess : boolean,
//     isLoading : boolean, 
//     status: string,
//     responseObject: string,
//     token: string
// }

// export const initialState: TokenState = {
//     isError : false,
//     isSuccess : false,
//     isLoading : false, 
//     status: '',
//     responseObject: '',
//     token:''
// };


// export const token = createSlice({
//     name: 'token',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string>) => {
//             state.token = action.payload;
//             console.log('Token aaya', action.payload);
//         },
//         logout: () => initialState,
//     },
// });

// export const { setToken } = token.actions;
// export default token.reducer;
