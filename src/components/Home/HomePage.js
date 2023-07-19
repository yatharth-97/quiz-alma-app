import { Grid } from '@mui/material';
import React from 'react';
import createQuizImg from '../../assets/images/create-quiz.jpg';
import myQuizImg from '../../assets/images/myquizzes.jpg';
import playQuizImg from '../../assets/images/playquiz.jpg';
import CardComp from './CardComp';

const HomePage = () => {
  return (
    <Grid
      container
      flexDirection='row'
      justifyContent={'center'}
      alignItems='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid>
        <CardComp
          title='Create New Quiz'
          image={createQuizImg}
          path='create-new-quiz'
        />
      </Grid>

      <Grid>
        <CardComp title='My Quizzes' image={myQuizImg} path='my-quizzes' />
      </Grid>

      <Grid>
        <CardComp title='Play Quiz' image={playQuizImg} path='play-quiz' />
      </Grid>
    </Grid>
  );
};

export default HomePage;
