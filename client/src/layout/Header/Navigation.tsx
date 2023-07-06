import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IMenuLink } from '../../interfaces/IMenuLink';

type Props = {
  navLinks: IMenuLink[];
};

function MyComponent({ navLinks }: Props) {
  const [toggleNav, setToggleNav] = useState(false);

  const handleOpenNavMenu = () => {
    setToggleNav(true);
  };

  const handleCloseNavMenu = () => {
    setToggleNav(false);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            transition: '100ms ease-in-out',
            '&:hover': {
              color: 'white',
            },
          }}
          aria-label="logo"
        >
          THE BIKE SHOP
        </Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton sx={{ zIndex: 1500 }} onClick={handleOpenNavMenu}>
            <MenuIcon
              // size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{ color: 'white' }}
            />
          </IconButton>
          <Drawer
            id="menu-appbar"
            open={toggleNav}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              padding: '3em 5em',
            }}
          >
            <Stack direction="column" spacing={2}>
              {navLinks.map((x) => {
                return (
                  <NavLink
                    key={x.link}
                    to={x.url}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      padding: '1em 7em',
                      borderBottom: '1px solid grey',
                    }}
                  >
                    {x.link?.toUpperCase()}
                  </NavLink>
                );
              })}
            </Stack>
          </Drawer>
        </Box>

        <Stack
          sx={{ display: { xs: 'none', md: 'flex' } }}
          spacing={4}
          direction="row"
        >
          {navLinks.map((x) => {
            return (
              <NavLink
                key={x.url}
                to={x.url}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {x.icon ? x.icon : x.link}
              </NavLink>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MyComponent;
