import React from 'react';
import { FormControlLabel, Checkbox, Box, Typography } from '@mui/material';

const EditDetails = ({ question, options, index }) => {
  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: 'bold' }} pt={3}>
          {index + 1}.{question}
        </Typography>
      </Box>
      <Box pb={0.5} pt={0.5}>
        {options.map((option, index) => {
          return (
            <FormControlLabel
              disabled
              control={<Checkbox checked={option.correct ? true : false} />}
              key={index}
              label={option.opt}
            />
          );
        })}
      </Box>
    </>
  );
};

export default EditDetails;
