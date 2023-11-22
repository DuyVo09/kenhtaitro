import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface UserState {
    user: number,
}

const initialValue: UserState = {
    user: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialValue,
    reducers: {
        login: (state) => {
            state.user = 1
        },
        logout: (state) => {
            state.user = 0;
        },
        switch: (state, action: PayloadAction<number>) => {
            state.user = action.payload;
        }
    }
});

export const authAction = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

const authReducer = authSlice.reducer;
export default authReducer;