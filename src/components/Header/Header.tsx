import { useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  styled,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Auth } from '..';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.03)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    maxWidth: '300px',
  },
  transition: 'background 0.2s linear',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 111,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontWeight: 500,
  display: 'block',
  width: '100%',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(0.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '85%',
    '&:focus': {
      backgroundColor: '#fff',
    },
  },
}));

const Login = styled('button')(({ theme }) => ({
  color: '#000000',
  cursor: 'pointer',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  '&:hover': {
    color: '#e5a040',
  },
  '& > span': {
    fontWeight: 500,
  },
}));

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
  const [user, setUser] = useState<boolean>(false);
  const [openAuthDialog, setOpenAuthDialog] = useState<boolean>(false);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpen = () => {
    setOpenAuthDialog(true);
  };

  const handleClose = () => {
    setOpenAuthDialog(false);
  };

  return (
    <AppBar position='fixed' color='secondary' sx={{ pl: 1, pr: 1 }}>
      <Auth open={openAuthDialog} handleClose={handleClose} />
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Blog
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Поиск'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button variant='contained' sx={{ mr: 'auto' }}>
          Новая запись
        </Button>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <Badge badgeContent={4} color='primary'>
              <MailOutlineIcon />
            </Badge>
          </IconButton>
          <IconButton
            size='large'
            aria-label='show 17 new notifications'
            color='inherit'
          >
            <Badge badgeContent={7} color='primary'>
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          {user ? (
            <>
              <Avatar
                variant='rounded'
                alt='Remy Sharp'
                src='/static/images/avatar/2.jpg'
                sx={{ ml: 1 }}
              />
              <IconButton onClick={handleOpenUserMenu} disableRipple>
                <KeyboardArrowDownIcon />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
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
                  <MenuItem key={setting}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Login onClick={handleOpen}>
              <PersonOutlineIcon fontSize='medium' />
              <Typography component='span'>Войти</Typography>
            </Login>
          )}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='show more'
            aria-haspopup='true'
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
