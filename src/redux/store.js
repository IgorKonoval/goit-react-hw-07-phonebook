import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './ContactsSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
