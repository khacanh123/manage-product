import { createSlice } from '@reduxjs/toolkit';
import { createProductAPI, deleteProductAPI, getListProduct, loginRequest, updateProductAPI } from '../../api';
type product =  {
    list_product: any[]
}
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    list_product: [],
    detailProduct: {}
  } as any,
  reducers: {
    setListProduct: (state, action) => {
        // console.log(action.payload);  
        state.list_product = action.payload
    }, 
    updateProduct: (state, action) => {
        const item = state.list_product.findIndex((i: any) => i.id === action.payload.id);
        state.list_product[item] = action.payload
    },
    createProduct: (state, action) => {
        state.list_product.push(action.payload)
    },
    deleteProduct: (state, action) => {
        state.list_product = state.list_product.filter((item: any) => item.id !== action.payload.id)
    },
    setDetailProduct: (state, action) => {
        state.detailProduct = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      productSlice.caseReducers.setListProduct(state, action);
    });
    
  },
});

export const { setListProduct, updateProduct, deleteProduct, createProduct, setDetailProduct } = productSlice.actions;