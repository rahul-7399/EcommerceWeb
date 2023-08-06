import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUS.IDLE,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setProduct(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state,action)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUS.IDLE
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.status = STATUS.ERROR
        })
  }
});
export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks
export const fetchProduct = createAsyncThunk("product/get" , async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products");
    return data;
})
// export function fetchProduct() {
//   return async function fetchproductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const {data} = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProduct(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
