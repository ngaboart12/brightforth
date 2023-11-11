import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stage: 1
  };

const navigateSlice= createSlice({
    name:'step',
    initialState,
    reducers:{
        addStep: (state) => {
            state.stage+=1;
          },
        removeStep: (state) => {
            state.stage-=1;
          },
    }
})
export const {addStep,removeStep }= navigateSlice.actions
export default navigateSlice.reducer;