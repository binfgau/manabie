import React from 'react';
import { ISignupInfo } from '../lib/interfaces/ISignupInfo';

type State = {
  nameInfo: ISignupInfo;
};

type Action = { type: 'updateNameInfo'; payload: ISignupInfo };

type Dispatch = (action: Action) => void;

type SignupProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  nameInfo: {
    firstName: '',
    lastName: '',
  },
};

const SignupContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const signupReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'updateNameInfo': {
      return {
        ...state,
        nameInfo: action.payload,
      };
    }
  }
};

const SignupProvider = ({ children }: SignupProviderProps) => {
  const [state, dispatch] = React.useReducer(signupReducer, initialState);
  const value = { state, dispatch };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
};

const useSignup = () => {
  const context = React.useContext(SignupContext);
  if (context) {
    return context;
  }
};

export { SignupProvider, useSignup };
