import { SignUpState } from './types';

export const prevStep = (
  state: SignUpState,
  payload: { activeStep: number }
): SignUpState => ({
  signUpData: {
    ...state.signUpData,
    formConfig: {
      ...state.signUpData.formConfig,
      activeStep: payload.activeStep - 1,
    },
  },
});

export const completeForm = (
  state: SignUpState,
  payload: { activeStep: number }
): SignUpState => {
  const updatedSteps = state.signUpData.formConfig.steps.map((step) => ({
    ...step,
    isCompleted: true,
  }));

  return {
    signUpData: {
      ...state.signUpData,
      formConfig: {
        ...state.signUpData.formConfig,
        steps: updatedSteps,
        activeStep: payload.activeStep + 1,
      },
    },
  };
};
