import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type TProps = {
  title?: string;
  btnTitle?: string;
  onSearch?(): (event: React.MouseEvent) => void;
  onAction?(): (event: React.MouseEvent) => void;
};
const Filter: React.FC<TProps> = ({ title = 'text', btnTitle = 'create', onSearch, onAction }) => {
  return (
    <Grid
      sx={{
        backgroundColor: '#ffff',
        padding: '15px',
        margin: '20px',
        boxShadow: 2
      }}
      display="flex"
      justifyContent="space-between">
      <Box component="h3">{title}</Box>
      <Box>
        <TextField
          onChange={onSearch}
          placeholder="Search keywords"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Button onClick={onAction} variant="contained">
        {btnTitle}
      </Button>
    </Grid>
  );
};

export default Filter;
