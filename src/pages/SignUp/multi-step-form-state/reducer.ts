import { SignUpAction, SignUpState } from './types';
import { completeForm, prevStep } from './actions';
import * as actionTypes from '../../../constants/action-types';

export const signUpReducer = (
  state: SignUpState,
  action: SignUpAction
): SignUpState => {
  switch (action.type) {
    case actionTypes.PREV_STEP: {
      return prevStep(state, action.payload);
    }

    case actionTypes.COMPLETE_FORM: {
      return completeForm(state, action.payload);
    }

    default:
      throw new Error('Action type not recognized');
  }
};
