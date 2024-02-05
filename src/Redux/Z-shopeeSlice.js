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
    deleteItems : (state,action)=>{
      state.prodactData = state.prodactData.filter(
        (item)=>item._id !== action.payload
      )
    },
    resetCart : (state)=>{
      state.prodactData = []
    },

    IncreamentQuantity : (state , action )=>{
      const item = state.prodactData.find(
        (item) =>item._id === action.payload._id
      );
      if(item){
        item.quantity++
      }
    },
    DencreamentQuantity : (state , action )=>{
      const item = state.prodactData.find(
        (item) =>item._id === action.payload._id
      );
      if(item.quantity === 1){
        item.quantity = 1
      }else{
        item.quantity--
      }
    }
  },
});
export const { addToCart,deleteItems,IncreamentQuantity,DencreamentQuantity,resetCart} = ZshopeeSlice.actions;
export default ZshopeeSlice.reducer;
