export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = (state, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
