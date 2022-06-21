import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import AvatarPersonal from '../../../components/avatar/AvatarPersonal';
import MultiStepButton from '../../../components/button/MultiStepButton';
import { Steps } from '../../../constants/steps';
import { FormValues } from '../../../types';

interface ReviewAllInfoProps {
  formData: FormValues;
  onPrevClick: () => void;
}

const ReviewAllInfo = ({ formData, onPrevClick }: ReviewAllInfoProps) => {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '60px 40px',
          background: 'linear-gradient( #b0d0f0, #fff)',
          borderRadius: '20px',
        }}
      >
        <AvatarPersonal srcImage={formData.avatar} />
        <Typography
          component='div'
          variant='h5'
          sx={{ mt: 2, mb: 2 }}
          color='#555'
        >
          {formData.firstName + ' ' + formData.lastName}
        </Typography>
      </Card>

      <MultiStepButton
        activeStep={Steps.ReviewAllInfo}
        onClickHandler={onPrevClick}
      />
    </>
  );
};

export default ReviewAllInfo;
