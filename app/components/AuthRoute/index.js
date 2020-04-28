import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthUser } from 'containers/Login/selectors';

const AuthRoute = props => {
  const { isAuthUser, type } = props;
  if (type === 'guest' && isAuthUser) {
    return <Redirect to="/profile" />;
  }

  if (type === 'private' && !isAuthUser) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

AuthRoute.propTypes = {
  isAuthUser: PropTypes.bool,
  type: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isAuthUser: makeSelectIsAuthUser(),
});

export default connect(mapStateToProps)(AuthRoute);
