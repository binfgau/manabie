import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignUp from './features/signup/SignUp';
import Layout from './layout/Layout';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
