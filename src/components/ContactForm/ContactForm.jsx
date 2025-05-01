import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '@redux/contacts/selectors';
import { addContact } from '@redux/contacts/operations';
import { useId } from 'react';
import { toast } from 'react-hot-toast';

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
  const nameFieldId = useId();
  const numberFieldId = useId();

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
      onSubmit={onSubmit}
      validationSchema={NewContactSchema}
    >
      {() => (
        <Form className={s.contactForm}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} name="name" />
          <ErrorMessage name="name" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} name="number" type="tel" />
          <ErrorMessage name="number" component="span" />

          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
