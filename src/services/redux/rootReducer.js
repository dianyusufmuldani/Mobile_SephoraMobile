import loginSlice from './reducer/loginSlice';
import homeSlice from './reducer/homeSlice';
import registerSlice from './reducer/registerSlice';
import otpSlice from './reducer/otpSlice';
import globalSlice from './reducer/globalSlice';
import mpinSlice from './reducer/mpinSlice';

export const rootReducers = {
  login: loginSlice,
  home: homeSlice,
  register: registerSlice,
  otp: otpSlice,
  global: globalSlice,
  mpin: mpinSlice,
};
