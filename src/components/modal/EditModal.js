import * as React from 'react';
import { useSelector } from 'react-redux';
import DisplayQuestion from '../New/DisplayQuestion';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 380, md: 800, lg: 1000 },
  bgcolor: 'background.paper',
  border: '2px solid #f5f5f5',
  boxShadow: 24,
  p: { xs: 1.5, md: 3, lg: 4 },
  height: '100%',
  maxHeight: { xs: 450, md: 500, lg: 500 },
  display: 'block',
  overflow: 'scroll',
};

const EditModal = ({ edit, handleEdit }) => {
  const Quiz = useSelector((state) => state.quiz.latestquiz);

  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={edit}
        onClose={handleEdit}
        closeAfterTransition
        style={{ backdropFilter: 'blur(4px)' }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={edit}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h5'
              component='h2'
              sx={{ fontWeight: 'bold', textAlign: 'center' }}
            >
              Questions
            </Typography>

            {Quiz.questions.map(({ question, options }, index) => (
              <DisplayQuestion
                question={question}
                options={options}
                index={index}
                key={index}
              />
            ))}

            <Stack
              direction='row-reverse'
              justifyContent='flex-start'
              alignItems='flex-end'
            >
              <Button
                variant='outlined'
                color='error'
                sx={{ mt: 5, ml: 8 }}
                onClick={() => handleEdit()}
              >
                Close
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default EditModal;
