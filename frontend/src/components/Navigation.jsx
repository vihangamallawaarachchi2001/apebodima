import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from './Drawer';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#3335cf', boxShadow: '0 0 4px 8px rgba(255, 255, 255, 0.3)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{fontSize: 24, fontWeight: 700, flexGrow: 1}}>
             Bodima
          </Typography>
          
          <Button color="inherit" sx={{ ml: 2, fontWeight: 'bold', color: '#fff' }}><PersonIcon /></Button>
        </Toolbar>
      </AppBar>
      <SwipeableTemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
