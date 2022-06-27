import { Grid } from '@mui/material';
import MultiStepButton from '../../../components/Button/MultiStepButton';
import RHFTextField from '../../../components/Input/RHFTextField';
import { Steps } from '../../../constants/steps';

const PersonalInfo = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            nameRegister='firstName'
            label='First name'
            autoComplete='given-name'
            rules={{
              required: {
                value: true,
                message: 'This is a required field',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            nameRegister='lastName'
            label='Last name'
            autoComplete='family-name'
            rules={{
              required: {
                value: true,
                message: 'This is a required field',
              },
            }}
          />
        </Grid>
      </Grid>

      <MultiStepButton activeStep={Steps.PersonalInfo} />
    </>
  );
};

export default PersonalInfo;
