import { Box, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Notify from '../../components/Notify/Notify';
import SignUpStepper from '../../components/Stepper/SignUpStepper';
import * as actionTypes from '../../constants/action-types';
import { Steps } from '../../constants/steps';
import { useSignUpState } from '../../context/SignUpStateProvider';
import { FormValues } from '../../types/FormValues';
import AvatarInfo from './steps/AvatarInfo';
import PersonalInfo from './steps/PersonalInfo';
import ReviewAllInfo from './steps/ReviewAllInfo';

const SignUp = () => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    avatar: '',
  });

  const {
    signUpData: { formConfig },
    signUpDispatch,
  } = useSignUpState();

  const methods = useForm<FormValues>({ mode: 'all' });

  const onPrevClickHandler = () => {
    signUpDispatch({
      type: actionTypes.PREV_STEP,
      payload: {
        activeStep: formConfig.activeStep,
      },
    });
  };

  const onSubmitHandler = (data: FormValues) => {
    signUpDispatch({
      type: actionTypes.COMPLETE_FORM,
      payload: {
        activeStep: formConfig.activeStep,
      },
    });

    setFormData({
      ...formData,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    console.log(formData);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case Steps.PersonalInfo:
        return <PersonalInfo />;
      case Steps.AvatarInfo:
        return (
          <AvatarInfo
            onPrevClick={onPrevClickHandler}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case Steps.ReviewAllInfo:
        return (
          <ReviewAllInfo onPrevClick={onPrevClickHandler} formData={formData} />
        );
      case Steps.Notify:
        return <Notify />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <FormProvider {...methods}>
      <Typography component='h1' variant='h4' align='center' color='primary'>
        Sign Up
      </Typography>
      <Box
        component='form'
        noValidate
        onSubmit={methods.handleSubmit(onSubmitHandler)}
      >
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <SignUpStepper formConfig={formConfig} />
          {getStepContent(formConfig.activeStep)}
        </Paper>
      </Box>
    </FormProvider>
  );
};

export default SignUp;
