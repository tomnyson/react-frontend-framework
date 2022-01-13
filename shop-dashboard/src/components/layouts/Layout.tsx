import Grid from '@mui/material/Grid';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

import Header from './Header';
type MainLayout = {
  children: any;
};

const MainLayout = ({ children }: any) => {
  return (
    <Grid>
      <Header />
      <Grid display="flex">
        <Grid
          sx={{
            height: '100vh'
          }}
          item
          xs={2}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <Typography
                sx={{
                  '&:hover': {
                    color: 'red',
                    backgroundColor: 'white'
                  }
                }}
                variant="inherit">
                Category
              </Typography>
            </MenuItem>
          </MenuList>
        </Grid>
        <Grid
          sx={{
            backgroundColor: '#eaeaea'
          }}
          item
          xs={10}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
