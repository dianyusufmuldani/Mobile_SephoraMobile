import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   value: 0
  data: [],
  mpinSukses: [0, 0, 0, 0, 0, 0],
  isiMpin: '',
};

export const MpinSlice = createSlice({
  name: 'mpin',
  initialState,
  reducers: {
    setMpin: (state, action) => {
      state.isiMpin = action.payload.isiMpin;
    },
  },
});

export const {setMpin} = MpinSlice.actions;
export default MpinSlice.reducer;
