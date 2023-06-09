import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { routes } from '../../../routes';

interface INavigation {
  handleDrawerClose: (state: boolean) => void;
  isSidebarOpened: boolean;
}

const drawerWidth = 340;


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

export default function Navigation({ isSidebarOpened, handleDrawerClose }: INavigation) {
  const theme = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const handleExpand = (index: number) => {
    handleDrawerClose(true)
    setExpandedIndex(expandedIndex === index && isSidebarOpened ? -1 : index);
  };

  return (
    <Drawer variant="permanent" open={isSidebarOpened}>
      <DrawerHeader>
        <IconButton onClick={() => handleDrawerClose(false)}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {routes.map(
          (item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isSidebarOpened ? 'initial' : 'center',
                  px: 2.5
                }}
                onClick={() => handleExpand(index)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isSidebarOpened ? 3 : 'auto',
                    justifyContent: 'center'
                  }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: isSidebarOpened ? 1 : 0 }} />
                {item.children && isSidebarOpened && ( expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </ListItemButton>
              {item.children && (
                <Collapse in={expandedIndex === index} timeout="auto">
                  <List component="div" disablePadding >
                    {item.children.map((subitem, subindex) => (
                      <ListItemButton
                        key={subindex}
                        component={Link}
                        to={subitem.path}
                        sx={{ pl: 9 }}
                      >
                        <ListItemText primary={subitem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
}
