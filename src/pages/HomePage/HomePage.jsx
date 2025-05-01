import { Box, Typography, Stack } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box spacing={2} alignItems="center" display="flex">
        <Typography variant="h2" component="h1" fontWeight="bold">
          Contacts App
        </Typography>
        <Typography variant="h1" component="span" role="img" aria-label="phone">
          📲
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
