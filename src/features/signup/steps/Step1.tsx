import React from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ISignupInfo } from '../../../lib/interfaces/ISignupInfo';
import { useSignup } from '../../../store/SignupContext';

const schema = yup.object().shape({
  firstName: yup.string().max(30).required('First name is a required field'),
  lastName: yup.string().max(20).required('Last name is a required field'),
});

interface IStep1Props {
  setActiveStep: (page: number) => void;
}

const Step1: React.FC<IStep1Props> = ({ setActiveStep }: IStep1Props) => {
  const signupContext = useSignup();

  const methods = useForm<ISignupInfo>({
    resolver: yupResolver(schema),
    defaultValues: signupContext!.state.nameInfo,
  });

  const onSubmit: SubmitHandler<ISignupInfo> = (data: ISignupInfo) => {
    console.log(data);
    signupContext!.dispatch({ type: 'updateNameInfo', payload: data });
    setActiveStep(1);
  };

  return (
    <FormProvider {...methods}>
      <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              name='firstName'
              control={methods.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='First name *'
                  variant='standard'
                  fullWidth
                  autoComplete='given-name'
                  error={!!methods.formState.errors.firstName}
                  helperText={methods.formState.errors?.firstName?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name='lastName'
              control={methods.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Last name *'
                  variant='standard'
                  fullWidth
                  autoComplete='family-name'
                  error={!!methods.formState.errors.lastName}
                  helperText={methods.formState.errors?.lastName?.message}
                />
              )}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' type='submit' sx={{ mt: 3, ml: 1 }}>
            Next
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default Step1;
