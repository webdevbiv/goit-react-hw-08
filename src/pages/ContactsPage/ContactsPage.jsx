import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '@components/ContactForm/ContactForm';
import SearchBox from '@components/SearchBox/SearchBox';
import ContactList from '@components/ContactList/ContactList';
import { fetchContacts } from '@redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '@redux/contacts/selectors';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Phonebook
      </Typography>
      <Box mb={2}>
        <ContactForm />
      </Box>

      <Box mb={2}>
        <SearchBox />
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}

      {contacts.length === 0 && !loading && (
        <Typography variant="body1" color="text.secondary">
          No contacts found.
        </Typography>
      )}

      {contacts.length > 0 && (
        <>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Total contacts: {contacts.length}
          </Typography>
          <ContactList />
        </>
      )}
    </Container>
  );
};

export default ContactsPage;
