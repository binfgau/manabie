import { Grid } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import MultiStepButton from '../../../components/Button/MultiStepButton';
import ReactHookFormTextField from '../../../components/Input/ReactHookFormTextField';
import { Steps } from '../../../constants/steps';
import { GenericInputErrors } from '../../../types';

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
