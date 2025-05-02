import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box } from '@mui/material';

const NotFoundPage = ({ isLoggedIn }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography>
        {isLoggedIn ? (
          <Link component={RouterLink} to="/contacts">
            Go to Contacts
          </Link>
        ) : (
          <Link component={RouterLink} to="/login">
            Login to continue
          </Link>
        )}
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
