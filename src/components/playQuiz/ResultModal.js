import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetQuiz } from '../../features/quizSlice';
import Congrats from '../../assets/images/party-popper.png';
import { Box, Typography, Button } from '@mui/material/';
import './styles.css';

const ResultModal = ({ modal, handleModal, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const results = useSelector((state) => state.quiz.finalanswers);

  const marks = results.map((element) => element.correct);

  //When the user presses the Go Back to Home button, this function runs.
  // The states of the answers and finalanswers are reset.
  const resetQuizHandler = () => {
    dispatch(resetQuiz());
    navigate('/');
    handleModal(!modal);
  };

  return (
    <Box
      sx={{
        ml: { xs: 2, md: 15, lg: 40 },
        mr: { xs: 2, md: 15, lg: 40 },
        mt: { xs: 15, md: 20, lg: 10 },
      }}
      bgcolor={'white'}
    >
      <Box>
        <img src={Congrats} alt='congrats' className='congrats' />
      </Box>

      <Typography
        sx={{
          pt: { xs: 3, md: 5, lg: 5 },
          pb: { xs: 2, md: 3, lg: 3 },
        }}
        color={'red'}
        variant='h6'
      >
        Congratulations {name}!
      </Typography>

      <Typography
        sx={{
          fontWeight: 'bold',
          typography: { xs: 'h6', md: 'h4', lg: 'h4' },
          pb: { xs: 5, md: 7, lg: 7 },
        }}
      >
        <span style={{ fontWeight: 'bold' }}>
          You've scored {marks.filter((element) => element === true).length} out
          of {marks.length}
        </span>
      </Typography>

      <Box sx={{ pb: { xs: 4, md: 5, lg: 5 } }}>
        <Button
          variant='contained'
          color='error'
          onClick={() => resetQuizHandler()}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default ResultModal;
