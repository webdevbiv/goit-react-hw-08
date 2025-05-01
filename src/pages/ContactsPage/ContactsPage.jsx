import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import ContactForm from '@components/ContactForm/ContactForm';
import SearchBox from '@components/SearchBox/SearchBox';
import ContactList from '@components/ContactList/ContactList';
import { fetchContacts } from '@redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '@redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <FadeLoader />}
      {error && <p>{error}</p>}
      {contacts.length === 0 && <p>No contacts found.</p>}
      {contacts.length > 0 && <p>Total contacts: {contacts.length}</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;
