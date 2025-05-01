import { register } from '@redux/auth/operations';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '@redux/auth/selectors';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(7, 'Password must be at least 7 characters')
    .max(50, 'Password must be less than 50 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success('Registered successfully!');
      resetForm();
    } catch (err) {
      toast.error('Registration failed: ' + err.message);
      console.error('Registration error:', err.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form>
          <Box
            pt="30px"
            px={2}
            display="flex"
            flexDirection="column"
            maxWidth={350}
            mx="auto"
          >
            {error && (
              <Typography color="error" textAlign="center">
                {error}
              </Typography>
            )}

            <TextField
              fullWidth
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
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
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
                minWidth: '98px',
              }}
            >
              {isLoading ? null : 'Register'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
