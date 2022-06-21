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

/*
export const completeFormActiveStep = (
  state: AppState,
  payload: { activeStep: number }
): AppState => {
  const steps = state.appData.formConfig.steps;
  const activeStepIndex = steps.findIndex((el) => el.id === payload.activeStep);
  const updatedStep = { ...steps[activeStepIndex], isCompleted: true };
  const updatedSteps = [
    ...steps.slice(0, activeStepIndex),
    updatedStep,
    ...steps.slice(activeStepIndex + 1),
  ];

  return {
    appData: {
      ...state.appData,
      formConfig: {
        ...state.appData.formConfig,
        activeStep: payload.activeStep + 1,
        steps: updatedSteps,
      },
    },
  };
};
*/
