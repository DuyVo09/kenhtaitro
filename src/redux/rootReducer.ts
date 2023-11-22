import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "features/Authentication/saga/authSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
});