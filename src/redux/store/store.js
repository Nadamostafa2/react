import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language"
import counterReducer from "./slices/counter"
import usersReducer from "./slices/usersSlice"

const store=configureStore({
    reducer:{
       language: languageReducer,
       counter:counterReducer,
       users:usersReducer
    }
})
export default store;


// state={
//     language:{language:en},
//     counter:{counter:0},
// users:{users:[]}
// }