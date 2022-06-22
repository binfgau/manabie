import { Box, Button } from '@mui/material';
import { Steps } from '../../constants/steps';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';

export interface MultiStepButtonProps {
  activeStep: number;
  onClickHandler?: ButtonBaseProps['onClick'];
}

const MultiStepButton = ({
  activeStep,
  onClickHandler,
}: MultiStepButtonProps) => {
  const renderNextButtonsWithActiveStep = (
    activeStep: MultiStepButtonProps['activeStep']
  ) => {
    switch (activeStep) {
      case Steps.PersonalInfo:
      case Steps.AvatarInfo:
        return <ButtonBase type='submit'>Next</ButtonBase>;
      case Steps.ReviewAllInfo:
        return <ButtonBase type='submit'>Submit</ButtonBase>;
      default:
        return <></>;
    }
  };

  const renderBackButtonsWithActiveStep = (
    activeStep: MultiStepButtonProps['activeStep']
  ) => {
    switch (activeStep) {
      case Steps.ReviewAllInfo:
      case Steps.AvatarInfo: {
        return <ButtonBase onClick={onClickHandler}>Back</ButtonBase>;
      }

      default:
        return <></>;
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {activeStep !== Steps.PersonalInfo && (
        <Button onClick={onClickHandler} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
      )}
      <Button variant='contained' sx={{ mt: 3, ml: 1 }} type='submit'>
        {activeStep === 2 ? 'Submit' : 'Next'}
      </Button>

      {/* {renderActionButtonsWithActiveStep(activeStep)} */}
    </Box>
  );
};

export default MultiStepButton;
