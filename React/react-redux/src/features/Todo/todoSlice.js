import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo : ["Manava","Uattam"]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            state.todo.push(action.payload)
        },
        deletetodo : (state,action)=>{
            state.todo = state.todo.filter((data,index)=> index !== action.payload)
        },
        updatetodo:(state,action)=>{
            
        }
    }
})

export const {addTodo,deletetodo} = todoSlice.actions;

export default todoSlice.reducer;