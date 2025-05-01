import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const initialValues = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  status: {
    isLoading: false,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder
      // LOGIN
      .addCase(login.pending, state => {
        state.status.isLoading = true;
        state.status.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.status.isLoading = false;
        state.status.error = action.payload || action.error.message;
      })

      // REGISTER
      .addCase(register.pending, state => {
        state.status.isLoading = true;
        state.status.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.status.isLoading = false;
        state.status.error = action.payload || action.error.message;
      })

      // LOGOUT
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      // REFRESH
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
