import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useLocation, } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  {name: 'Versions', path: '/versions'}, 
  {name: 'Products', path: '/products'}, 
  {name: 'Regions', path: '/regions'}
];

export default function Header() {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    setAnchorElNav(null);
    navigate(path)
  };

    return (
        <AppBar position="static">
          <Toolbar>
          <Box sx={{ display: {xs: 'none', md: 'flex'}, flexGrow: 1, justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
                fontSize: 20,
              }}
            >
              Developer Assessment
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { xs: 'none', md: '12px' }}}>
              {pages.map(({name, path}) => (
                <Button
                  key={name}
                  onClick={() => handleCloseNavMenu(path)}
                  color='primary'
                  sx={{ my: 2, display: 'block' }}
                  variant={pathname === path ? 'contained' : 'outlined'}
                  size="small"
                >
                  {name}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="menu-icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({name, path}) => (
                <MenuItem key={name} onClick={() => handleCloseNavMenu(path)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 20,
            }}
          >
            Developer Assessment
          </Typography>
          </Toolbar>
        </AppBar>
    )
}