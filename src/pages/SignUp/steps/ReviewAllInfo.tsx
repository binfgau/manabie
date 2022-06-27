import { Card, Typography } from '@mui/material';
import AvatarPersonal from '../../../components/Avatar/AvatarPersonal';
import MultiStepButton, {
  MultiStepButtonProps,
} from '../../../components/Button/MultiStepButton';
import { Steps } from '../../../constants/steps';
import { FormValues } from '../../../types/FormValues';

interface ReviewAllInfoProps {
  formData: FormValues;
  onPrevClick: MultiStepButtonProps['onClickHandler'];
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
        <AvatarPersonal src={formData.avatar} />
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
