import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleActive, deleteQuiz, editQuiz } from '../../features/quizSlice';
import DeleteQuiz from '../modal/DeleteQuiz';
import EditPage from './EditPage';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

/**
 * 
 *update Modal state and handle function
 This state displays the quiz questions because it 
 was used to set the edit state but the edit functionality is not yet accessible.
 */

const QuizItems = ({ title, serial, active, id, date }) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
    dispatch(editQuiz(id));
  };

  const delQuiz = () => {
    dispatch(deleteQuiz(id));
  };
  const handleDelete = () => {
    setModal(!modal);
  };
  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align='center'>{serial}.</TableCell>
      <TableCell align='center'>{title}</TableCell>
      <TableCell align='center'>
        <FormControlLabel
          control={
            <Switch
              checked={active}
              onClick={() => dispatch(toggleActive(id))}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label={active ? 'Active' : 'Inactive'}
        />
      </TableCell>

      <TableCell align='center'>{date}</TableCell>
      <TableCell align='center'>
        <NavLink to='/play-quiz'>
          <IconButton aria-label='delete'>
            <PlayArrowIcon />
          </IconButton>
        </NavLink>

        <IconButton onClick={() => handleEdit()}>
          <VisibilityIcon />
        </IconButton>

        <IconButton aria-label='delete' onClick={() => setModal(!modal)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>

      {modal && (
        <DeleteQuiz
          modal={modal}
          handleDelete={handleDelete}
          delQuiz={delQuiz}
          id={id}
        />
      )}
      {edit && <EditPage edit={edit} handleEdit={handleEdit} />}
    </TableRow>
  );
};

export default QuizItems;
