import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name : "admindata",
    initialState:{
        admin : [],
        loading : false,
        error:""
    },
    reducers:{

    }
})
export const {} =  adminSlice.actions;

export default adminSlice.reducer;