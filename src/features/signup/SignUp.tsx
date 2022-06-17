import React, { useState } from 'react';
import { Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Result from './steps/Result';
import { SignupProvider } from '../../store/SignupContext';

const steps = ['Full Name', 'Uploading Avatar', 'Review Profile'];

const SignUp: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [avatar, setAvatar] = useState(
    'https://cdn3.iconfinder.com/data/icons/users-outline/60/50_-Blank_Profile-_user_people_group_team-512.png'
  );

  return (
    <Paper
      variant='outlined'
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography component='h1' variant='h4' align='center' color='primary'>
        Sign Up
      </Typography>

      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <SignupProvider>
        {activeStep === 0 ? (
          <Step1 setActiveStep={setActiveStep} />
        ) : activeStep === 1 ? (
          <Step2
            setActiveStep={setActiveStep}
            setAvatar={setAvatar}
            avatar={avatar}
          />
        ) : (
          <Result setActiveStep={setActiveStep} avatar={avatar} />
        )}
      </SignupProvider>
    </Paper>
  );
};

export default SignUp;
