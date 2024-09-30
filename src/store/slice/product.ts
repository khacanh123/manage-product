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
    builder.addCase(getListProduct.fulfilled, (state, action) => {
        productSlice.caseReducers.setDetailProduct(state, action);
      });
      builder.addCase(createProductAPI.fulfilled, (state, action) => {
        productSlice.caseReducers.createProduct(state, action);
      });
      builder.addCase(updateProductAPI.fulfilled, (state, action) => {
        productSlice.caseReducers.updateProduct(state, action);
      });
      builder.addCase(deleteProductAPI.fulfilled, (state, action) => {
        productSlice.caseReducers.updateProduct(state, action);
      });
  },
});

export const { setListProduct, updateProduct, deleteProduct, createProduct, setDetailProduct } = productSlice.actions;