import Logo from '../assets/images/almalogo.png';
import { AppBar, Toolbar, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const Nav = () => {
  return (
    <AppBar position='static' style={{ background: '#FFFFFF' }}>
      <Toolbar
        sx={{
          display: { xs: 'flex' },
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to='/'>
          <img src={Logo} alt='AlmaBetter-Logo' width='120px' />
        </NavLink>
        <ThemeProvider theme={theme}>
          <Stack direction='row' spacing={4}>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'activenav' : 'nav')}
            >
              Home
            </NavLink>

            <NavLink
              to='/my-quizzes'
              className={({ isActive }) => (isActive ? 'activenav' : 'nav')}
            >
              My Quizzes
            </NavLink>
          </Stack>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
