import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"language",
    initialState:{language:"en"},
    reducers:{
        changeLanguagee:function(state,action){ //action{type,payload}
                state.language=action.payload
        }
    }
})
export const {changeLanguagee} =langSlice.actions
export default langSlice.reducer