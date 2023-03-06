import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filter-selectors';

// файл оголошення функцій-селекторів
export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // const contacts = selectContacts(state);
    // const filter = selectFilter(state);
    // console.log('selectVisibleContacts');
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
