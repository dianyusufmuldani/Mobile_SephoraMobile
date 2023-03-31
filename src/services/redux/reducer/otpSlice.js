import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   value: 0
  data: [],
  otpSukses: [1, 1, 1, 1, 1, 1],
  isiOtp: '',
};

export const OtpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state.isiOtp = action.payload.isiOtp;
    },
  },
});

export const {setOtp} = OtpSlice.actions;
export default OtpSlice.reducer;
