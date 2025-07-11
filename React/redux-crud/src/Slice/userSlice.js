import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// read function
export const userread = createAsyncThunk(
    'userread', async (data, { rejectWithValue }) => {
        try {

            const res = await axios.get("http://localhost:3000/users");
            const result = await res.data
            return result;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
// newdata
export const useradd = createAsyncThunk(
    'useradd', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/users", data)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// delete

export const deletedata = createAsyncThunk(
    'deletedata', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/users/${id}`);
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
// update data

export const updateuser = createAsyncThunk(
    'updateuser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/users/${data.id}`, data)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        user: [],
        loading: false,
        error: ""
    },
    reducers: {
        // pedding
        userpending: (state) => {
            state.loading = true
        },
        // fullfield
        userFullfiled: (state, action) => {
            state.loading = false
            state.user.push(action.payload)
        },
        // reject
        userReject: (state, action) => {
            state.loading = false
            state.error = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userread.pending, (state, action) => {
                state.loading = true
            })
            .addCase(userread.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(userread.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // new data
            .addCase(useradd.pending, (state, action) => {
                state.loading = true
            })
            .addCase(useradd.fulfilled, (state, action) => {
                state.loading = false
                state.user.push(action.payload)
            })
            .addCase(useradd.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // delete

            .addCase(deletedata.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deletedata.fulfilled, (state, action) => {
                state.loading = false

                // index or data.id
                state.user = state.user.filter((data, index) => index !== action.payload)
            })
            .addCase(deletedata.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // update data
            .addCase(updateuser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateuser.fulfilled, (state, action) => {
                state.loading = false

                state.user = state.user.map((ele)=>
                    ele.id = action.payload.id ? action.payload : ele
                )

            })
            .addCase(updateuser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }

})

export const { userpending, userFullfiled, userReject } = userSlice.actions;

export default userSlice.reducer;