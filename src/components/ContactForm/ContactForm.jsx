import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from '@redux/contacts/selectors';
import { addContact } from '@redux/contacts/operations';
import { toast } from 'react-hot-toast';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

const NewContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .trim()
    .matches(/^[0-9-]+$/, 'Phone number can only include digits and hyphens')
    .min(3, 'Phone number must be at least 3 characters')
    .max(50, 'Phone number must be less than 50 characters')
    .required('Phone number is required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = async (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.number === values.number
    );

    if (isDuplicate) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }

    try {
      await dispatch(addContact(values)).unwrap();
      toast.success(`${values.name} added successfully!`);
      resetForm();
    } catch (err) {
      toast.error('Failed to add contact: ' + err.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NewContactSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form>
          <Box display="flex" flexDirection="column" maxWidth={350} mx="auto">
            <TextField
              size="small"
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{
                mb: '28px',

                '& .MuiFormHelperText-root': {
                  minHeight: '30px',
                  position: 'absolute',
                  top: '100%',
                },
              }}
            />

            <TextField
              size="small"
              id="number"
              name="number"
              label="Phone Number"
              type="tel"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              sx={{
                mb: '28px',
                '& .MuiFormHelperText-root': {
                  minHeight: '30px',
                  position: 'absolute',
                  top: '100%',
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              startIcon={isLoading && <CircularProgress size={20} />}
              sx={{
                mr: 'auto',
                ml: 'auto',
                pl: '30px',
                pr: '30px',
                minWidth: '76px',
              }}
            >
              {isLoading ? null : 'Add Contact'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
