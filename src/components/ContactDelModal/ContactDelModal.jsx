import { Box, Typography, Button, Stack, Paper } from '@mui/material';

const ContactDelModal = ({ name, confirmDelete, cancelDelete }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        borderColor: 'divider',
        p: 2,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        Delete {name}?
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="error" onClick={confirmDelete}>
          Yes
        </Button>
        <Button variant="outlined" onClick={cancelDelete}>
          Cancel
        </Button>
      </Stack>
    </Paper>
  );
};

export default ContactDelModal;
