import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modalSlice';
import NewQuiz from '../New/NewQuiz';
import { Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

/**
 *
 * Whenever this page loads, a popup asking for the Question type will appear.
 * We can accomplish that with useEffect.
 *  The dispatch function in the body of useEffect will send the modal state to redux.
 * OpenModal is called when the page first loads and sets the isOpen state to true.
 */
const NewForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openModal());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      background: {
        default: '#f5f5f5',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Typography
        variant='h4'
        sx={{
          textAlign: 'left',
          typography: { xs: 'h6', md: 'h4', lg: 'h4' },
          pt: { xs: 4, md: 6, lg: 5 },
          pl: { xs: 2, md: 6, lg: 20 },
          pb: { xs: 1, md: 2, lg: 2 },
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Create New Quiz</span>
      </Typography>

      <Box
        sx={{
          ml: { xs: 1, md: 5, lg: 20 },
          mr: { xs: 1, md: 5, lg: 20 },
        }}
        bgcolor={'white'}
      >
        <NewQuiz />
      </Box>
    </ThemeProvider>
  );
};

export default NewForm;
