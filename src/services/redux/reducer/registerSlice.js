import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   value: 0,
  data: [],
  nik: null,
  noTelepon: null,
  namaLengkap: null,
  birthday: null,
  email: null,
};

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegister: (state, action) => {
      (state.nik = action.payload.nik),
        (state.noTelepon = action.payload.noTelepon),
        (state.namaLengkap = action.payload.namaLengkap),
        (state.birthday = action.payload.birthday),
        (state.email = action.payload.email);
    },
  },
});

export const {setRegister} = RegisterSlice.actions;
export default RegisterSlice.reducer;
