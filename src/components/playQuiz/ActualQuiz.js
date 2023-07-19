import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Typography, Box, Button, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';

/**
 *
 * This element shows the quiz's title and description.
 * Name and number of questions for the quiz taker.
 * The quiz is launched by clicking the "Challenge Accepted" button.
 *  The "Take me back" button will return you to the homepage.
 */
const ActualQuiz = () => {
  const quiz = useSelector((state) => state.quiz.playquiz);
  const name = useSelector((state) => state.quiz.name);

  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      background: {
        default: '#f5f5f5',
      },
    },
  });
  // cssBaseLine resets the css of the window btw.
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          ml: { xs: 2, md: 20, lg: 30 },
          mr: { xs: 2, md: 20, lg: 30 },
          mt: { xs: 7, md: 10, lg: 5 },
        }}
        bgcolor={'white'}
      >
        <Typography
          sx={{
            textAlign: 'left',
            typography: { xs: 'h4', md: 'h4', lg: 'h3' },
            pt: { xs: 2, md: 4, lg: 4 },
            pb: { xs: 2, md: 2, lg: 2 },
            pl: { xs: 2, md: 4, lg: 4 },
            pr: { xs: 1, md: 4, lg: 4 },
          }}
        >
          <span style={{ fontWeight: 'bold' }}>{quiz.title}</span>
        </Typography>

        <Typography
          sx={{
            textAlign: 'left',
            typography: { xs: 'caption', md: 'subtitle1', lg: 'subtitle1' },
            pt: { xs: 0, md: 2, lg: 2 },
            pb: { xs: 2, md: 2, lg: 2 },
            pl: { xs: 2, md: 4, lg: 4 },
            pr: { xs: 1, md: 4, lg: 4 },
          }}
        >
          {quiz.description}
        </Typography>

        <Typography
          sx={{
            textAlign: 'left',
            typography: { xs: 'body1', md: 'h6', lg: 'h6' },
            pt: { xs: 0, md: 2, lg: 2 },
            pb: { xs: 2, md: 2, lg: 2 },
            pl: { xs: 2, md: 4, lg: 4 },
            pr: { xs: 1, md: 4, lg: 4 },
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Quiz Taker-</span> {name}
        </Typography>

        <Typography
          sx={{
            textAlign: 'left',
            typography: { xs: 'body1', md: 'h6', lg: 'h6' },
            pt: { xs: 0, md: 2, lg: 2 },
            pb: { xs: 2, md: 2, lg: 2 },
            pl: { xs: 2, md: 4, lg: 4 },
            pr: { xs: 1, md: 4, lg: 4 },
          }}
        >
          <span style={{ fontWeight: 'bold' }}>No.of Questions-</span>{' '}
          {quiz.questions.length}
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            typography: { xs: 'h6', md: 'h5', lg: 'h5' },
            pt: { xs: 3, md: 5, lg: 5 },
            pb: { xs: 2, md: 2, lg: 2 },
          }}
        >
          <span style={{ fontWeight: 'bold' }}>
            Will you accept this challenge?
          </span>
        </Typography>

        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={{ xs: 1, sm: 4, md: 4 }}
          sx={{
            pt: { xs: 2, md: 4, lg: 4 },
            pb: { xs: 5, md: 4, lg: 4 },
          }}
        >
          <Button
            variant='contained'
            size='small'
            color='success'
            onClick={() => navigate('/start')}
          >
            Challenge Accepted
          </Button>
          <Button
            variant='contained'
            color='error'
            size='small'
            onClick={() => navigate('/')}
          >
            Take Me Back
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default ActualQuiz;
