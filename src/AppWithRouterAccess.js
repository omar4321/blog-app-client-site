import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import DetailView from './Component/details/DetailView';
import CreatePost from './Component/Post/CreatePost';
import UpdateView from './Component/Post/UpdateView';
import Login from './Acount/Login';
import { Box } from '@material-ui/core';
import Home from './Component/Home';
import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  const customAuthHandler = () => {
    history.push('/');
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path="/" component={Header} />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/login"
            render={() => <Login config={oktaSignInConfig} />}
          />
          <Route path="/login/callback" component={LoginCallback} />

          <Route exact path="/detail/:id" component={DetailView} />
          <Route exact path="/post" component={CreatePost} />
          <Route exact path="/update/:id" component={UpdateView} />

          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Box>
    </Security>
  );
};
export default AppWithRouterAccess;
