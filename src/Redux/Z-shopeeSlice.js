import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  prodactData: [],
  userInfo: null,
};

export const ZshopeeSlice = createSlice({
  name: "ZshopeeSlic",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = state.prodactData.find(
            (item) =>item._id === action.payload._id
        );
        if(item){
            item.quantity += action.payload.quantity 
        }else{
            state.prodactData.push(action.payload)
        }

    },
  },
});
export const { addToCart} = ZshopeeSlice.actions;
export default ZshopeeSlice.reducer;
