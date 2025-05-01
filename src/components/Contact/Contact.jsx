import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '@redux/contacts/operations';
import ContactDelModal from '@components/ContactDelModal/ContactDelModal';
import ContactEditForm from '@components/ContactEditForm/ContactEditForm';
import ContactCard from '@components/ContactCard/ContactCard';
import toast from 'react-hot-toast';
import { Box, Paper } from '@mui/material';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => setShowModal(true);
  const cancelDelete = () => setShowModal(false);
  const handleEditClick = () => setEditMode(true);
  const handleCancelEdit = () => setEditMode(false);

  const confirmDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success(`Contact "${name}" deleted!`);
      setShowModal(false);
    } catch (err) {
      toast.error(`Failed to delete contact: ${err.message}`);
    }
  };

  return (
    <Paper
      elevation={1}
      sx={{
        position: 'relative',
        p: 2,
        border: '1px solid #ccc',
        mb: 2,
      }}
    >
      {editMode ? (
        <ContactEditForm
          id={id}
          name={name}
          number={number}
          setEditMode={setEditMode}
          handleCancelEdit={handleCancelEdit}
        />
      ) : (
        <ContactCard
          name={name}
          number={number}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}

      {showModal && (
        <ContactDelModal
          name={name}
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}
    </Paper>
  );
};

export default Contact;
