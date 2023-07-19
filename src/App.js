import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import MyQuizzes from './components/myQuiz/MyQuizzes';
import PlayQuiz from './components/playQuiz/PlayQuiz';
import ActualQuiz from './components/playQuiz/ActualQuiz';
import Nav from './components/Nav';
import QuestionCard from './components/playQuiz/QuestionCard';
import { useSelector } from 'react-redux';
import CreateNewModal from './components/modal/CreateNewModal';
import NewForm from './components/New/NewForm';

/**
 * The redux state of the modal is chosen.
 *  Here, appbar/navbar is rendered such that it will appear on all
 * of the routed web pages.
 * If the value of redux state is true, render the Modal
 */
function App() {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <div className='App'>
      {/* Header */}
      <Nav />
      {/* Rest of the Page */}
      {isOpen && <CreateNewModal />}
      {/* These are various routes needed for the Quiz App */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-new-quiz' element={<NewForm />} />
        <Route path='/my-quizzes' element={<MyQuizzes />} />
        <Route path='/play-quiz' element={<PlayQuiz />} />
        <Route path='/actual-quiz' element={<ActualQuiz />} />
        <Route path='/start' element={<QuestionCard />} />
      </Routes>
    </div>
  );
}

export default App;
