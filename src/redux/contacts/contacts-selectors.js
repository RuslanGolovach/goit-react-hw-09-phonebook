import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

/*мемоизация селектора фильтра*/
export const filteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
/*селектор фидьтра без мемоизации */
// export const filteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
