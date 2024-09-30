import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notify } from "../utils/notify";

export const loginRequest = createAsyncThunk(
  "auth/login",
  (payload: any, { dispatch }) => {
    return axios.post("http://localhost:3008/login-user", payload).then((res) => {
      if (res.data.status === false) {
        notify({
          type: "error",
          message: "Thông tin đăng nhập không đúng!",
        });
      } else {
        notify({
            type: "success",
            message: "Đăng nhập thành công!",
          });
        return res;
      }
    });
  }
);
export const getListProduct = createAsyncThunk(
    "auth/get-product",
    (token: string, { dispatch }) => {
      return axios.get("http://localhost:3008/list-product", {
        headers: {
            "Authorization": token
        }
      }).then((res) => {
        return res
      });
    }
  );
  export const getProductByID = createAsyncThunk(
    "auth/get-product-detail",
    (id: string) => {
      return axios.get("http://localhost:3008/get-product/"+id).then((res) => {
        if(res.status == 401) {
            notify({
                type: 'error',
                message: 'Khong tim thay san pham'
            })
        }else {
            return res.data
        }
      });
    }
  );
  export const createProductAPI = createAsyncThunk(
    "auth/get-product",
    (data: any) => {
      return axios.post("http://localhost:3008/create-product/",data).then((res) => {
        return res.data
      });
    }
  );

  export const updateProductAPI = createAsyncThunk(
    "auth/update-product",
    (data: any) => {
      return axios.put("http://localhost:3008/update-product/", data).then((res) => {
        if(res.status == 401) {
            notify({
                type: 'error',
                message: 'Khong co san pham '
            })
        }else {
            return res.data
        }
      });
    }
  );

  export const deleteProductAPI = createAsyncThunk(
    "auth/delete-product",
    (id: string) => {
      return axios.delete("http://localhost:3008/get-product/"+id).then((res) => {
        if(res.status == 401) {
            notify({
                type: 'error',
                message: 'Khong tim thay san pham'
            })
        }else {
            return res.data
        }
      });
    }
  );