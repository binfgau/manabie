import { Dispatch } from 'react';
import { SignUpData, FluxStandardAction } from '../../types/SignUpProvider';

export interface PrevStep extends FluxStandardAction {
  type: 'PREV_STEP';
  payload: {
    activeStep: number;
  };
}

export interface CompleteForm extends FluxStandardAction {
  type: 'COMPLETE_FORM';
  payload: {
    activeStep: number;
  };
}

export interface SignUpState {
  signUpData: SignUpData;
}

export type SignUpAction = PrevStep | CompleteForm;

export interface SignUpStateReturn extends SignUpState {
  signUpDispatch: Dispatch<SignUpAction>;
}

export type ContextValue = [SignUpState, Dispatch<SignUpAction>] | undefined;
