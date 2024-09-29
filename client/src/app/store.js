import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";
import poroductSlice from "./features/productSlice";


export const store = configureStore({
    reducer:{
        products:poroductSlice,
    }
})
