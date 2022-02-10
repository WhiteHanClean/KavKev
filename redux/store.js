import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./autorization/autorization.slice"

const rootReducer = combineReducers({
    auth: authSlice
})
export const store = configureStore({
    reducer: rootReducer
})