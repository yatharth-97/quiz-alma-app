import React from 'react';
import { Typography, Box, IconButton, Checkbox, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

/**
 * This component will show the user how many alternatives they have made along
 * with their rightor wrong and also the status.
 */
const Answer = ({ text, id, onDelete, correct }) => {
  return (
    <Box sx={{ border: '1px solid grey', borderRadius: 1 }} mt={5} mr={5}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography sx={{ textAlign: 'left' }} pt={1} pb={1} pl={2}>
          {text}
        </Typography>
        <IconButton color='disabled' onClick={() => onDelete(id)}>
          <DeleteOutlineIcon />
        </IconButton>
      </Stack>

      <Box
        style={{ background: '#f5f5f5' }}
        sx={{ pl: { xs: 13, md: 12, lg: 13 } }}
      >
        <Typography
          sx={{ textAlign: 'right' }}
          pt={1}
          pb={1}
          justifyContent='flex-end'
          variant='caption'
        >
          Correct Answer
          <Checkbox size='small' checked={correct ? true : false} />
        </Typography>
      </Box>
    </Box>
  );
};
export default Answer;
