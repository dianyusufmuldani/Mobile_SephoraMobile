import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setLoading} = GlobalSlice.actions;
export default GlobalSlice.reducer;
