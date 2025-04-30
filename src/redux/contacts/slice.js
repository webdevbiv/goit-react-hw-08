import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // Fulfilled
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.loading = false;
      })

      // Matcher pending
      .addMatcher(
        action =>
          [
            fetchContacts.pending,
            addContact.pending,
            deleteContact.pending,
            updateContact.pending,
          ].some(thunk => thunk.match(action)),
        state => {
          state.loading = true;
          state.error = null;
        }
      )

      // Matcher rejected
      .addMatcher(
        action =>
          [
            fetchContacts.rejected,
            addContact.rejected,
            deleteContact.rejected,
            updateContact.rejected,
          ].some(thunk => thunk.match(action)),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
