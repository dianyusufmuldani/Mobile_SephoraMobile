import {createSlice} from '@reduxjs/toolkit';
import {hitHome, hitLogin} from '../../api';

const initialState = {
  //   value: 0,
  data: '',
  // username: null,
  // email: null,
};

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getLogin = request => async dispatch => {
  try {
    const response = await hitHome(request);
    dispatch(setLogin(response.data));
    // dispatch(setLogin(response.data.nameAlias));
  } catch (err) {
    throw new Error(err);
  }
};

export const {setLogin, fetchLogin} = HomeSlice.actions;
export default HomeSlice.reducer;
