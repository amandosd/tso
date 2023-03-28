import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

export default function Layout() {
  const [isSidebarOpened, setIsSidebarOpened] = React.useState(false);

  const handleDrawerShow = () => {
    setIsSidebarOpened((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header isSidebarOpened={isSidebarOpened} handleDrawerOpen={handleDrawerShow} />
      <Navigation isSidebarOpened={isSidebarOpened} handleDrawerClose={handleDrawerShow} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
