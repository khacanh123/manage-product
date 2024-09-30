import { createSlice } from '@reduxjs/toolkit';
import { loginRequest } from '../../api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    dataUser: {},
    infoUser: {}
  },
  reducers: {
    setDataUser: (state, action) => {
      state.dataUser = action.payload.data;
      localStorage.removeItem('token');
      if(action.payload.data.token)
        localStorage.setItem('token', action.payload.data.token);
        
    },
    setInfoUser: (state, action) =>  {
        state.infoUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      authSlice.caseReducers.setDataUser(state, action);
    });
  },
});

export const { setDataUser, setInfoUser } = authSlice.actions;