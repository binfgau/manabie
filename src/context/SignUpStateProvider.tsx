import { Dispatch, useMemo, createContext, useContext, ReactNode } from 'react';
import {
  SignUpAction,
  SignUpState,
  ContextValue,
  SignUpStateReturn,
} from '../pages/SignUp/multi-step-form-state/types';

export const SignUpContext = createContext<ContextValue>(undefined);

interface SignUpStateProviderProps {
  signUpState: SignUpState;
  signUpDispatch: Dispatch<SignUpAction>;
  children: ReactNode;
}

export const SignUpStateProvider = ({
  signUpState,
  signUpDispatch,
  children,
}: SignUpStateProviderProps): JSX.Element => {
  const value: [SignUpState, Dispatch<SignUpAction>] = useMemo(
    () => [signUpState, signUpDispatch],
    [signUpState, signUpDispatch]
  );
  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export const useSignUpState = (): SignUpStateReturn => {
  const signUpContext = useContext(SignUpContext);
  if (!signUpContext) {
    throw new Error(`useSignUpState must be used within a SignUpStateProvider`);
  }

  const [signUpState, signUpDispatch] = signUpContext;

  const { signUpData } = signUpState;

  return {
    signUpData,
    signUpDispatch,
  };
};
