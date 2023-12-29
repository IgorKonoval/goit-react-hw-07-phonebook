import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: (state, actions) => {
      state.contacts.push(actions.payload);
    },
    deleteContact: (state, actions) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
    prepare(newContact) {
      return {
        payload: {
          id: nanoid(),
          ...newContact,
        },
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
