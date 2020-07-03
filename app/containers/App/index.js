/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'utils/app/ui/theme';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import LoginPage from 'containers/Login/Loadable';
import ProfilePage from 'containers/Profile/Loadable';
import RegisterPage from 'containers/Register/Loadable';

import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  // 120px is the height of header and footer
  min-height: calc(100vh - 120px);
  padding: 0 16px;
  flex-direction: column;

  @media (min-width: 960px) {
    padding: 60px 16px;
  }
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} type="guest" />
            <Route path="/register" component={RegisterPage} type="guest" />
            <Route exact path="/profile" component={ProfilePage} type="private" />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </AppWrapper>
        <Footer />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}
