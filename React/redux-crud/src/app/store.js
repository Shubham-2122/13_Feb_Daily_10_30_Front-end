import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slice/userSlice";
import  adminSlice  from "../Slice/adminSlice";

export const store = configureStore({
    reducer:{
        users : userSlice,
        admin : adminSlice
    }
})