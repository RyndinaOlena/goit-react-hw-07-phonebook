import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBookReduser";
export const store = configureStore({
    reducer: {
        phonebookStore: phoneBookReducer
    }
})