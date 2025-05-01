import { BiSolidContact } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';

const ContactCard = ({ name, number, handleDeleteClick, handleEditClick }) => {
  return (
    <>
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
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
      <button type="button" onClick={handleDeleteClick}>
        Delete
      </button>
    </>
  );
};

export default ContactCard;
