import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoImage from '../images/logo.png';

interface IHeader {
  handleDrawerOpen: (state: boolean) => void;
  isSidebarOpened: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 340;

const languages = ['Russian (русский)', 'English'];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default function Header({ isSidebarOpened, handleDrawerOpen }: IHeader) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" open={isSidebarOpened}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{
            marginRight: 5,
            ...(isSidebarOpened && { display: 'none' })
          }}
          onClick={() => handleDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Avatar src={LogoImage} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 4,
                color: 'inherit',
                textDecoration: 'none'
              }}>
              ОП/БиОТ Управление Отходами
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 0, alignItems: 'center', alignContent: 'center' }}>
          <Typography
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: 'inherit',
              textDecoration: 'none'
            }}>
            <PersonIcon sx={{ verticalAlign: 'middle' }} />
            Amandos, Daulet
          </Typography>
          <Button
            id="basic-button"
            aria-controls={anchorElUser ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElUser ? 'true' : undefined}
            color="inherit"
            onClick={handleOpenUserMenu}>
            <TranslateIcon /> Russian (русский)
            <ArrowDropDownIcon />
          </Button>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {languages.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
