/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { APP_NAME } from 'utils/constants';
import { textColor } from 'utils/ui/palette';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'components/Button';
import { InputField, PasswordField } from 'components/Form';

import { changeEmail } from './actions';
import { makeSelectForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(48, 82, 120, 0.16);
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  margin-top: 8px;

  @media (min-width: 960px) {
    padding: 32px;
    width: 600px;
  }
`;

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
    <Wrapper>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2">
            <FormattedMessage {...messages.loginTo} />
            &nbsp;
            <b style={{ color: textColor.main }}>{APP_NAME}</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            // error={error}
          />
        </Grid>
        <Grid item xs={12}>
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
          <Button>
            <FormattedMessage {...messages.login} />
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
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
