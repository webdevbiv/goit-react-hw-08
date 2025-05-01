import { updateContact } from '@redux/contacts/operations';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import { BiSolidContact } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .trim()
    .matches(/^[0-9-]+$/, 'Invalid phone number')
    .min(3, 'Phone number must be at least 3 characters')
    .max(50, 'Phone number must be less than 50 characters')
    .required('Phone number is required'),
});

const ContactEditForm = ({
  id,
  name,
  number,
  setEditMode,
  handleCancelEdit,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    try {
      await dispatch(updateContact({ id, ...values })).unwrap();
      toast.success('Contact updated!');
      setEditMode(false);
    } catch (err) {
      toast.error('Failed to update contact: ' + err.message);
    }
  };

  return (
    <Formik
      initialValues={{ name, number }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, touched, errors, handleReset }) => (
        <Form>
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 2 }}
            >
              <BiSolidContact size={18} />
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
                fullWidth
                sx={{
                  '& .MuiFormHelperText-root': {
                    minHeight: '30px',
                    position: 'absolute',
                    top: '85%',
                  },
                }}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 2 }}
            >
              <FaPhone size={16} />
              <TextField
                size="small"
                id="number"
                name="number"
                label="Phone Number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                fullWidth
                sx={{
                  '& .MuiFormHelperText-root': {
                    minHeight: '30px',
                    position: 'absolute',
                    top: '85%',
                  },
                }}
              />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                type="button"
                onClick={() => {
                  handleReset();
                  handleCancelEdit();
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactEditForm;
