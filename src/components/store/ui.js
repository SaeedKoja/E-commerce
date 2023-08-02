import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"ui",
    initialState:{showCart:false},
    reducers:{
        toglleShow(state) {
            state.showCart=!state.showCart
        }
    }
})

export default uiSlice.reducer;
export const uiAction = uiSlice.actions;