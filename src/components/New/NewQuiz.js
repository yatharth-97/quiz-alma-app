import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Checkbox,
  Stack,
} from '@mui/material';
import { addQuiz, latestQuiz } from '../../features/quizSlice';
import Answer from '../New/Answer';
import SaveQuiz from '../modal/SaveQuiz';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

/**
 * 📝
 * 1) Start by using dispatch (useDispatch).
 * 2) count,setCount -> Record the states of the questions, the options, the titles, and the descriptions.
 * 3) option,setOption -> has answers array to a single question
 * 4) ques, setQues -> has questions set of single quiz.
 * 5) add, setAdd -> useEffect will be 'ON'
 * 6) optVal, setOptVal -> adding the active option
 * 7) checked, setChecked -> checked option value
 * 8) que, setQue -> current question
 * 9) title, setTitle -> quiz title
 * 10) desc, setDesc -> quiz description
 * 🔶
 * addOption =() => handling user info and optVal state
 * addQuestion =() => adding question and adding safe check if no question is written
 * onDelete =() => filtering id of stte
 *
 */
const NewQuiz = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const [option, setOption] = useState([]);

  const [ques, setQues] = useState([]);

  const [add, setAdd] = useState(false);
  const [answerLength, setanswerLength] = useState(false);

  const [optVal, setOptVal] = useState('');

  const [checked, setChecked] = useState(false);

  const [que, setQue] = useState('');

  const [title, setTitle] = useState('');

  const [desc, setDesc] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (add) {
        setAdd(false);
      }
    }, 1000);

    const timeOut2 = setTimeout(() => {
      if (answerLength) {
        setanswerLength(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeOut2);
    };
  }, [add, answerLength]);

  function formatDate(newDate) {
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
    const d = newDate;
    const date = d.getDate();
    const monthName = months[d.getMonth()];
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const formatted = `${date} ${monthName}, ${
      hours < 10 ? `0${hours}` : `${hours}`
    }:${minutes < 10 ? `0${minutes}` : `${minutes}`} `;
    return formatted.toString();
  }

  const addOption = () => {
    if (optVal === '') {
      alert('Enter a value to add');
      return;
    }

    if (option.length >= 4) {
      setOption((prevOption) => [...prevOption]);
      alert('You can have at most 4 options');
    } else {
      const Option = {
        opt: optVal,
        correct: checked,
        id: Math.random() * 10,
      };

      setOption((prevOption) => [...prevOption, Option]);
    }

    setOptVal('');
    setChecked(false);
  };

  const addQuestion = () => {
    if (que === '' || option.length === 0) {
      alert('Enter a Question to add it!');
      return;
    }

    if (option.length > 2) {
      const Question = {
        question: que,
        options: option,
        id: count,
      };

      setCount((prevCount) => prevCount + 1);
      setQues((prevQues) => [...prevQues, Question]);

      setOption([]);

      setAdd(true);
      setQue('');
    } else {
      setanswerLength(true);
    }
  };

  const onDelete = (id) => {
    const filteredArr = option.filter((element) => element.id !== id);
    setOption(filteredArr);
  };

  const onSave = () => {
    if (title === '' || ques.length <= 0) {
      alert('Fill out all the fields');
      return;
    }

    const date = new Date();

    const Quiz = {
      title: title,
      description: desc,
      questions: ques,
      id: Math.random(),
      createdOn: formatDate(date),
      isActive: true,
    };

    dispatch(addQuiz(Quiz));

    dispatch(latestQuiz(Quiz));

    setQues([]);
    setCount(1);
    setTitle('');
    setDesc('');

    handleModal();
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box
      sx={{
        pt: { xs: 2, md: 3, lg: 4 },
        pb: { xs: 2, md: 3, lg: 4 },
        pl: { xs: 1, md: 2, lg: 6 },
        pr: { xs: 1, md: 2, lg: 6 },
      }}
    >
      <Box
        sx={{
          textAlign: 'left',
          border: '1px solid',
          borderColor: 'grey.500',
          borderRadius: 1,
        }}
        pb={3}
      >
        <Box pt={2} pl={1} pr={1}>
          <TextField
            fullWidth
            label='Title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        <Box pt={2} pl={1} pr={1}>
          <TextField
            fullWidth
            label='Add Description'
            id='description'
            multiline={true}
            rows='3'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Box>
      </Box>

      <Box pt={2} sx={{ pl: { xs: 0, md: 1, lg: 1 } }}>
        <Typography sx={{ fontWeight: 'bold', textAlign: 'right' }} pb={2}>
          Question {count}{' '}
        </Typography>
        <TextField
          size='small'
          fullWidth
          id='question'
          value={que}
          onChange={(e) => setQue(e.target.value)}
        />
      </Box>

      {add && (
        <Typography sx={{ color: 'success.main' }} pb={2} pt={2}>
          Question has been added!{' '}
        </Typography>
      )}

      <Stack
        direction='row'
        sx={{
          flexWrap: { xs: 'wrap', md: 'wrap', lg: 'nowrap' },
          justifyContent: { xs: 'center', md: 'left', lg: 'center' },
        }}
      >
        {/* Map Method */}
        {option.map((element, i) => (
          <Answer
            text={element.opt}
            id={element.id}
            key={i}
            correct={element.correct}
            onDelete={onDelete}
          />
        ))}
      </Stack>

      <Box pt={4} sx={{ textAlign: 'center' }}>
        <Typography variant='caption'>
          Correct
          <Checkbox size='small' checked={checked} onChange={handleChange} />
        </Typography>

        <TextField
          label='New Answer'
          id='outlined-size-small'
          size='small'
          value={optVal}
          onChange={(e) => setOptVal(e.target.value)}
        />
        <IconButton color='primary' onClick={addOption}>
          <AddBoxOutlinedIcon />
        </IconButton>
      </Box>

      <Box pt={2} pl={1} pr={1} sx={{ textAlign: 'center' }}>
        <Button
          variant='outlined'
          startIcon={<AddBoxOutlinedIcon />}
          onClick={addQuestion}
        >
          Add Question
        </Button>
      </Box>

      <Box sx={{ textAlign: 'right' }} pt={2} pl={1} pr={1}>
        <Button variant='contained' onClick={onSave}>
          Save
        </Button>
      </Box>

      {openModal && <SaveQuiz open={openModal} handleModal={handleModal} />}
    </Box>
  );
};

export default NewQuiz;
