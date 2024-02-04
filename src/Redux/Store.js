import { configureStore } from "@reduxjs/toolkit";
import ZShopeeReducer from "./Z-shopeeSlice";

export const store = configureStore({
    reducer:{
        ZshopeeSlic :ZShopeeReducer
    }
})