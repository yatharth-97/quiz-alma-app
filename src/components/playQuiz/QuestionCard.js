import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QnA from './QnA';
import ResultModal from './ResultModal';
import { setFinalAnswer, resetAnswer } from '../../features/quizSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import { Box, Typography, Button, Stack } from '@mui/material/';

const QuestionCard = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#f5f5f5',
      },
    },
  });

  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz.playquiz);
  const answer = useSelector((state) => state.quiz.answer);
  const name = useSelector((state) => state.quiz.name);

  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  //Depending on the count value, variables are allocated questions and alternatives and updated.
  const Question = quiz.questions;
  const question = Question[count].question;
  const options = Question[count].options;

  // increases count value when next question button is pressed.
  // value of the variables in the following question will change as the count value increases.
  const nextQuestionHandler = () => {
    dispatch(setFinalAnswer(answer));
    dispatch(resetAnswer());

    // if count value is greater than Question.length then show Result
    if (count >= Question.length - 1) {
      setModal(true);
      setCount((prev) => prev);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {modal === false ? (
        <Box
          sx={{
            ml: { xs: 2, md: 15, lg: 40 },
            mr: { xs: 2, md: 15, lg: 40 },
            mt: { xs: 10, md: 30, lg: 10 },
          }}
          bgcolor={'white'}
        >
          <Typography
            sx={{
              textAlign: 'center',
              typography: { xs: 'h5', md: 'h4', lg: 'h4' },
              pt: { xs: 2, md: 4, lg: 3 },
              pb: { xs: 2, md: 2, lg: 5 },
            }}
          >
            <span style={{ fontWeight: 'bold' }}>{quiz.title}</span>
          </Typography>

          <QnA count={count} question={question} options={options} />

          <Stack
            spacing={4}
            pt={7}
            pb={4}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Typography sx={{ typography: { xs: 'h6', md: 'h5', lg: 'h5' } }}>
              <span style={{ fontWeight: 'bold' }}>Question {count + 1}</span>/
              {quiz.questions.length}
            </Typography>

            <Button
              variant='contained'
              color='primary'
              disabled={answer ? false : true}
              onClick={() => nextQuestionHandler()}
            >
              {count === Question.length - 1 ? 'Submit' : 'Next Question'}
            </Button>
          </Stack>
        </Box>
      ) : (
        <ResultModal modal={modal} handleModal={handleModal} name={name} />
      )}
    </ThemeProvider>
  );
};

export default QuestionCard;
