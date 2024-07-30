import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersAction=createAsyncThunk("users/getAllusers",
    async()=>{
       const res= await axios.get("http://localhost:1000/users")
       return res.data
    }
)

const usersSlice=createSlice(
{
    name:"users",
    initialState:{users:[]  
        // ,error:false,isloading:false 
     },
    extraReducers:(builder)=>{
        builder.addCase(
            usersAction.fulfilled,(state,action)=>{
                state.users=action.payload
            }   
        )
        // builder.addCase(usersAction.rejected,(state,action)=>{
        //     state.error=true
        // }),
        // builder.addCase(usersAction.pending),(state,action)=>{
        //     state.isloading=true
        // }
    }
}
)
export default usersSlice.reducer;