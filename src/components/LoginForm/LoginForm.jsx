import { login } from '@redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '@redux/auth/selectors';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { Box, Button, TextField, CircularProgress } from '@mui/material';

const LoginSchema = Yup.object().shape({
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
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      toast.success('Logged in successfully!');
      resetForm();
    } catch (err) {
      toast.error('Login failed: ' + err.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <Box
            pt="30px"
            px={2}
            display="flex"
            flexDirection="column"
            maxWidth={350}
            mx="auto"
          >
            <TextField
              fullWidth
              mb="23px"
              id="email"
              name="email"
              label="Email"
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
                mb: '30px',
                '& .MuiFormHelperText-root': {
                  minHeight: '20px',
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
              width={160}
              startIcon={isLoading && <CircularProgress size={20} />}
              sx={{
                mr: 'auto',
                ml: 'auto',
                pl: '30px',
                pr: '30px',
                minWidth: '76px',
              }}
            >
              {isLoading ? null : 'Log In'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
