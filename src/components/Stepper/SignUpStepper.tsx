import React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';
import { SignUpData } from '../../types';

const SignUpStepper = ({ formConfig }: SignUpData) => {
  return (
    <Stepper activeStep={formConfig.activeStep} sx={{ pt: 3, pb: 5 }}>
      {formConfig.steps.map((step) => (
        <Step key={step.id}>
          <StepLabel>{step.name}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default SignUpStepper;
