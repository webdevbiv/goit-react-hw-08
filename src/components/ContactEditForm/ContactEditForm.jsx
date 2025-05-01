import { updateContact } from '@redux/contacts/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { BiSolidContact } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

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
      {({ handleReset }) => (
        <Form>
          <div>
            <BiSolidContact />
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <FaPhone />
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              handleReset();
              handleCancelEdit();
            }}
          >
            Cancel
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactEditForm;
