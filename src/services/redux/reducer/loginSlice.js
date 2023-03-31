import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import axios from 'axios';
import {hitLogin} from '../../api';

const initialState = {
  value: 0,
  data: null,
  loading: false,
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload;
      console.log('Data Tersimpan loginSlice');
    },
  },
});

export const getLogin = request => async dispatch => {
  try {
    const response = await hitLogin(request);
    dispatch(setLogin(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const {setLogin} = LoginSlice.actions;
export default LoginSlice.reducer;
