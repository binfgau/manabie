import { Box, Button, Grid } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { GenericInputErrors } from '../../../types';
import ReactHookFormTextField from '../../../components/input/ReactHookFormTextField';
import MultiStepButton from '../../../components/button/MultiStepButton';
import { Steps } from '../../../constants/steps';

interface PersonalInfoProps {
  register: UseFormRegister<FieldValues>;
  errors: GenericInputErrors;
}

const PersonalInfo = ({ register, errors }: PersonalInfoProps) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ReactHookFormTextField
            name='firstName'
            label='First name'
            autoComplete='given-name'
            register={register}
            rules={{
              required: {
                value: true,
                message: 'This is a required field',
              },
            }}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReactHookFormTextField
            name='lastName'
            label='Last name'
            autoComplete='family-name'
            register={register}
            rules={{
              required: {
                value: true,
                message: 'This is a required field',
              },
            }}
            errors={errors}
          />
        </Grid>
      </Grid>

      <MultiStepButton activeStep={Steps.PersonalInfo} />
    </>
  );
};

export default PersonalInfo;
