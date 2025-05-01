import { NavLink } from 'react-router-dom';
import { Stack, Link } from '@mui/material';

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Link
        component={NavLink}
        to="/login"
        underline="none"
        color="inherit"
        sx={{
          fontSize: { xs: '16px', sm: '20px' },
          '&.active': { fontWeight: 'bold', color: 'primary.main' },
        }}
      >
        Login
      </Link>
      <Link
        component={NavLink}
        to="/register"
        underline="none"
        color="inherit"
        sx={{
          fontSize: { xs: '16px', sm: '20px' },
          '&.active': { fontWeight: 'bold', color: 'primary.main' },
        }}
      >
        Register
      </Link>
    </Stack>
  );
};

export default AuthNav;
