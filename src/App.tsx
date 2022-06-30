import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useReducer } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SignUpStateProvider } from './context/SignUpStateProvider';
import Layout from './layout/Layout';
import { signUpReducer } from './context/multi-step-form-state/reducer';
import { SignUpState } from './context/multi-step-form-state/types';
import SignUp from './pages/SignUp/SignUp';

const theme = createTheme();

const App = () => {
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
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
