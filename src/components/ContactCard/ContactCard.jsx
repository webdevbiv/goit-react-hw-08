import { BiSolidContact } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { Box, Typography, Button, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const ContactCard = ({ name, number, handleDeleteClick, handleEditClick }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap={2}
      elevation={1}
      sx={{
        minWidth: 261,
        width: '100%',
        height: '100%',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
      }}
    >
      <Box sx={{ maxWidth: 261 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PersonIcon size="medium" />
          <Typography variant="body1" textOverflow="clip">
            {name}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <PhoneAndroidIcon size="medium" />
          <Typography variant="body1" textOverflow="clip">
            {number}
          </Typography>
        </Stack>
      </Box>

      <Stack
        direction="row"
        display={'flex'}
        justifyContent="center"
        sx={{ mt: 2, gap: 2 }}
      >
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
