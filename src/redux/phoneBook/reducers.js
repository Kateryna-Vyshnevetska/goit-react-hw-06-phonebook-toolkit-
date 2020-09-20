import { createReducer } from "@reduxjs/toolkit";
import {newContactAction,deleteContactAction,filterContactsAction,error} from './actions'

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

export const phoneBookReducer = createReducer({ ...initialState }, {
  [newContactAction]: (state, {payload})=>({
        contacts: {
          ...state.contacts,
          items: [payload, ...state.contacts.items],
        },
      }),
  [deleteContactAction]: (state,{payload})=>({
    contacts: {
      ...state.contacts,
      items: [
        ...state.contacts.items.filter(({id}) => {
          return id !== payload;
        }),
      ],
    },
  }),
  [filterContactsAction]:(state,{payload})=>({
    contacts: {
      items: [...state.contacts.items],
      filter: payload,
    },
  })
});

export const errors = createReducer('',{
  [error] : (_,{payload})=>payload,
  [newContactAction] : (_)=>'',
  [deleteContactAction] : (_)=>'',
  [filterContactsAction] : (_)=>'',
})

