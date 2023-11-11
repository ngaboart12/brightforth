import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import counterReducer from './navigateSlice';
import step1Reducer from './step1Slice'

 const store = configureStore({
    reducer:{
      stage:counterReducer,
      info: step1Reducer
    }
 })
 export default store