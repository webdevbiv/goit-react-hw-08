import { AppBar as MuiAppBar, Toolbar, Box, Container } from '@mui/material';
import AuthNav from '@components/AuthNav/AuthNav';
import Navigation from '@components/Navigation/Navigation';
import UserMenu from '@components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '@redux/auth/selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
