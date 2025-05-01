import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '@redux/auth/selectors';
import { logout } from '@redux/auth/operations';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => dispatch(logout());

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography
        variant="body1"
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        Welcome, {user}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size={isSmallScreen ? 'small' : 'medium'}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
