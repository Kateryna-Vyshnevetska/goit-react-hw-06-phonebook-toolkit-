import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const newContactAction = createAction(
  "phonebook/ADD_NEW_CONTACT",
  (contact) => ({
    payload: {
      id: uuidv4(),
      ...contact,
    },
  })
);

export const deleteContactAction = createAction("phonebook/DELETE_CONTACT");
export const filterContactsAction = createAction("phonebook/FILTER_CONTACTS");
export const error = createAction("errors/ERROR_MESSAGE");
