/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Grid from '@material-ui/core/Grid';

import Button from 'components/Button';
import { InputField, PasswordField } from 'components/Form';

import { changeEmail } from './actions';
import { makeSelectForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const key = 'login';

export function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <InputField
          label="Email Address"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          // error={error}
        />
      </Grid>
      <Grid item>
        <PasswordField
          label="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
          // error={error}
          onClickShowPassword={handleClickShowPassword}
          showPassword={values.showPassword}
        />
      </Grid>
      <Grid item>
        <Button>Login</Button>
      </Grid>
    </Grid>
  );
}

LoginPage.propTypes = {
  form: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  // onChangeEmail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
