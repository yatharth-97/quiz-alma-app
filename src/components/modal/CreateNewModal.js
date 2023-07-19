import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { closeModal } from '../../features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 350, md: 400, lg: 400 },
  bgcolor: 'background.paper',
  border: '2px solid #f5f5f5',
  boxShadow: 24,
  p: { xs: 3, md: 4, lg: 4 },
};

const CreateNewModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={isOpen}
        closeAfterTransition
        style={{ backdropFilter: 'blur(4px)' }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h5'
              component='h2'
              sx={{ fontWeight: 'bold' }}
            >
              Select Question Type
            </Typography>
            <Button
              variant='contained'
              sx={{ mt: 2 }}
              onClick={() => dispatch(closeModal())}
            >
              MCQ (Single Correct)
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CreateNewModal;
