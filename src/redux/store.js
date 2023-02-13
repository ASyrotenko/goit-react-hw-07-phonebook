import { configureStore } from '@reduxjs/toolkit';

import { contactsSlicer } from './contactsSlice/contactsSlice';
import { filterSlicer } from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlicer.reducer,
    filter: filterSlicer.reducer,
  },
});
