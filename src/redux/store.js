import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsSlicer } from './contactsSlice/contactsSlice';
import { filterSlicer } from './filterSlice/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlicer.reducer,
  filter: filterSlicer.reducer,
});

const contactsPersistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
