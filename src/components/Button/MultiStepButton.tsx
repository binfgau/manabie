import { Box } from '@mui/material';
import { Steps } from '../../constants/steps';
import { Step } from '../../types/SignUpProvider';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';

export interface MultiStepButtonProps {
  activeStep: Step['id'];
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
      case Steps.AvatarInfo:
        return <ButtonBase onClick={onClickHandler}>Back</ButtonBase>;
      default:
        return <></>;
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {renderBackButtonsWithActiveStep(activeStep)}
      {renderNextButtonsWithActiveStep(activeStep)}
    </Box>
  );
};

export default MultiStepButton;
