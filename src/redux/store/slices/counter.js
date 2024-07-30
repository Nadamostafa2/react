import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        changeCounter:function(state,action){
            state.counter=action.payload
        },
        decCounter:function(state,action){
            state.counter=state.counter-1
        }
    }
})
export const {changeCounter,decCounter}= counterSlice.actions
export default counterSlice.reducer