const ContactDelModal = ({ name, confirmDelete, cancelDelete }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        background: '#fff',
        border: '1px solid #ccc',
        padding: '0.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        zIndex: 1,
      }}
    >
      <p>Delete {name}?</p>
      <button onClick={confirmDelete}>Yes</button>
      <button onClick={cancelDelete}>Cancel</button>
    </div>
  );
};
export default ContactDelModal;
