import React, { useReducer } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignUp from './pages/signup/SignUp';
import Layout from './layout/Layout';
import { SignUpState } from './pages/signup/multi-step-form-state/types';
import { signUpReducer } from './pages/signup/multi-step-form-state/reducer';
import { SignUpStateProvider } from './context/SignUpStateProvider';

const theme = createTheme();

const App = (): JSX.Element => {
  const defaultState: SignUpState = {
    signUpData: {
      formConfig: {
        activeStep: 0,
        steps: [
          { id: 0, name: 'User Information', isCompleted: false },
          { id: 1, name: 'Upload Avatar', isCompleted: false },
          { id: 2, name: 'Review Profile', isCompleted: false },
        ],
      },
    },
  };

  const [signUpState, signUpDispatch] = useReducer<typeof signUpReducer>(
    signUpReducer,
    defaultState
  );

  return (
    <ThemeProvider theme={theme}>
      <SignUpStateProvider
        signUpState={signUpState}
        signUpDispatch={signUpDispatch}
      >
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Layout>
      </SignUpStateProvider>
    </ThemeProvider>
  );
};

export default App;
