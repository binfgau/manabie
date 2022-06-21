import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import AvatarInfo from './steps/AvatarInfo';
import PersonalInfo from './steps/PersonalInfo';
import ReviewAllInfo from './steps/ReviewAllInfo';
import { useSignUpState } from '../../context/SignUpStateProvider';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as actionTypes from '../../constants/action-types';
import SignUpStepper from '../../components/stepper/SignUpStepper';
import { Steps } from '../../constants/steps';
import { FormValues } from '../../types';

const SignUp = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    avatar: '',
  });

  const {
    signUpData: { formConfig },
    signUpDispatch,
  } = useSignUpState();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({ mode: 'all' });

  const onPrevClickHandler = () => {
    signUpDispatch({
      type: actionTypes.PREV_STEP,
      payload: {
        activeStep: formConfig.activeStep,
      },
    });
  };

  const onSubmitHandler = (data: any) => {
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
        return <PersonalInfo register={register} errors={errors} />;
      case Steps.AvatarInfo:
        return (
          <AvatarInfo
            onPrevClick={onPrevClickHandler}
            formData={formData}
            setFormData={setFormData}
            register={register}
            control={control}
          />
        );
      case Steps.ReviewAllInfo:
        return (
          <ReviewAllInfo onPrevClick={onPrevClickHandler} formData={formData} />
        );
      case Steps.Notify:
        return (
          <Typography align='center' color='primary' variant='h5'>
            SUCCESS
          </Typography>
        );
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <>
      <Typography component='h1' variant='h4' align='center' color='primary'>
        Sign Up
      </Typography>
      <Box component='form' onSubmit={handleSubmit(onSubmitHandler)}>
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <SignUpStepper formConfig={formConfig} />
          {getStepContent(formConfig.activeStep)}
        </Paper>
      </Box>
    </>
  );
};

export default SignUp;
