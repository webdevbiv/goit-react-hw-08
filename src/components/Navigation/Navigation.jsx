import { selectIsLoggedIn } from '@redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Stack, Link } from '@mui/material';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <Link
          component={NavLink}
          to="/"
          underline="none"
          color="inherit"
          sx={{
            fontSize: '20px',
            '&.active': { fontWeight: 'bold', color: 'primary.main' },
          }}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            component={NavLink}
            to="/contacts"
            underline="none"
            color="inherit"
            sx={{
              fontSize: '20px',
              '&.active': { fontWeight: 'bold', color: 'primary.main' },
            }}
          >
            Contacts
          </Link>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
