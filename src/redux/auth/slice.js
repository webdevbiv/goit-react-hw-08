import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const testInitialValues = {
  user: { name: 'CrossXXX', email: 'acrossxxxsss@mail.com' },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODEyMTc2M2M0OTVlZDZlMjVmNDE0NWIiLCJpYXQiOjE3NDYwMTg5MjF9.kEbh67VyzqZb-aUXvhIhBtBPYaXRTfqONYPxKlWpEb8',
  isLoggedIn: true,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder;
    // .addCase(register.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // })
    // .addCase(login.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // })
    // .addCase(logOut.fulfilled, state => {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // });
  },
});

export const authReducer = authSlice.reducer;
