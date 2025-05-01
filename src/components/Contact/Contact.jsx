import { FaPhone } from 'react-icons/fa6';
import { BiSolidContact } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteContact } from '@redux/contacts/operations';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li key={id}>
      <div>
        <div>
          <BiSolidContact />
          <div>{name}</div>
        </div>
        <div>
          <FaPhone />
          <div>{number}</div>
        </div>
      </div>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
