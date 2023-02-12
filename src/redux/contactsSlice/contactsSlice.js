import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContactRedux(state, action) {
      const contact = {
        id: shortid.generate(),
        name: action.payload.name,
        number: action.payload.number,
      };
      const normalizedName = action.payload.name.toLowerCase();
      const findeName = state.some(contact =>
        contact.name.toLowerCase().includes(normalizedName)
      );
      if (findeName) {
        return alert(`${action.payload.name} is already in contacts.`);
      }
      return [...state, contact];
    },
    deleteContactRedux(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactRedux, deleteContactRedux } = contactsSlicer.actions;
