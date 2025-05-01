import { BiSolidContact } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { Box, Typography, Button, Stack } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';

const ContactCard = ({ name, number, handleDeleteClick, handleEditClick }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      elevation={1}
      sx={{
        p: 2,
        maxWidth: 350,
        width: '100%',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          p: 2,
          maxWidth: 280,
          width: '100%',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        <PersonIcon size="medium" />
        <Typography
          variant="body1"
          textOverflow="clip"
          noWrap
          sx={{
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          p: 2,
          maxWidth: 280,
          width: '100%',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        <FaPhone size={18} />
        <Typography
          variant="body1"
          textOverflow="clip"
          noWrap
          sx={{
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {number}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2} mt={1}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleEditClick}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactCard;
