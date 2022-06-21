import { Box, Button } from '@mui/material';
import React from 'react';

interface MultiStepButtonProps {
  activeStep: number;
  onClickHandler?: () => void;
}

const MultiStepButton = ({
  activeStep,
  onClickHandler,
}: MultiStepButtonProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {activeStep !== 0 && (
        <Button onClick={onClickHandler} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
      )}
      <Button variant='contained' sx={{ mt: 3, ml: 1 }} type='submit'>
        {activeStep === 2 ? 'Submit' : 'Next'}
      </Button>
    </Box>
  );
};

export default MultiStepButton;
