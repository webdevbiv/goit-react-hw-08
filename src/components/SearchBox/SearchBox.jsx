import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '@redux/filters/selectors';
import { changeFilter } from '@redux/filters/slice';
import { Box, Typography, TextField } from '@mui/material';

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      maxWidth={400}
      mx="auto"
      mb={1}
    >
      <Typography variant="subtitle1" textAlign="center">
        Find contacts by name
      </Typography>
      <TextField
        size="small"
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        fullWidth
      />
    </Box>
  );
};

export default SearchBox;
