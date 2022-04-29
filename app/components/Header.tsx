import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// import { Link } from '@remix-run/react';
import Link from '@mui/material/Link';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            DISER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Explore</Typography>
              </MenuItem>
              <MenuItem>
                <Link href={'/contribute'} sx={{ textDecoration: 'none'}}><Typography textAlign="center" sx={{ color: 'black' }}>Predict SOC</Typography></Link>
              </MenuItem>
              <MenuItem>
                <Link href={'/underconstruction'} sx={{ textDecoration: 'none'}}><Typography textAlign="center" sx={{ color: 'black' }}>About</Typography></Link>
              </MenuItem>
              <MenuItem>
                <Link href={'/underconstruction'} sx={{ textDecoration: 'none'}}><Typography textAlign="center" sx={{ color: 'black' }}>Commercial</Typography></Link>
              </MenuItem>
              <MenuItem>
                <Link href={'/underconstruction'} sx={{ textDecoration: 'none'}}><Typography textAlign="center" sx={{ color: 'black' }}>Documentation</Typography></Link>
              </MenuItem>
              <MenuItem>
                <Link href={'https://github.com/Nostin/diser'} sx={{ textDecoration: 'none'}}><Typography textAlign="center" sx={{ color: 'black' }}>Contribute</Typography></Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            DISER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href={'/'} component={Button}>
              <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 500}} textAlign="center">Explore</Typography>
            </Link>
            <Link href={'/contribute'} component={Button}>
              <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 500}} textAlign="center">Predict SOC</Typography>
            </Link>
            <Link href={'/underconstruction'} component={Button}>
              <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 500}} textAlign="center">About</Typography>
            </Link>
            <Link href={'/underconstruction'} component={Button}>
              <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 500}} textAlign="center">Commercial</Typography>
            </Link>
            <Link href={'/underconstruction'} component={Button}>
              <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 500}} textAlign="center">Documentation</Typography>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
