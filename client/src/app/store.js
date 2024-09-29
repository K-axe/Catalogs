import {configureStore} from "@reduxjs/toolkit";

import poroductSlice from "./features/productSlice";


export const store = configureStore({
    reducer:{
        products:poroductSlice,
    }
})
