/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { APP_NAME } from 'utils/constants';
import { textColor } from 'utils/ui/palette';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from 'components/Button';
import { InputField, PasswordField } from 'components/Form';

import { requestLogin, resetErrorMessage } from './actions';
import { makeSelectLoginAction } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(48, 82, 120, 0.16);
  width: 100%;
  padding: 24px;
  margin: auto;

  @media (min-width: 960px) {
    padding: 32px;
    width: 600px;
  }
`;

const key = 'login';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string().required(),
});

export function LoginPage({ onRequestLogin, api, onResetErrorMessage }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      onRequestLogin(values);
      actions.setSubmitting(false);
    },
  });

  const { loading, error } = api;

  const history = useHistory();
  const prevApi = React.useRef(api);
  React.useEffect(() => {
    if (
      prevApi.current.loading === true &&
      api.loading === false &&
      api.error === null
    ) {
      history.push('/');
    }
  }, [api]);

  return (
    <form id="login-form" onSubmit={formik.handleSubmit}>
      <Wrapper>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2">
              <FormattedMessage {...messages.loginTo} />
              &nbsp;
              <b style={{ color: textColor.main }}>{APP_NAME}</b>
            </Typography>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error.message}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <InputField
              label="Email Address"
              type="email"
              name="email"
              onFocus={() => onResetErrorMessage()}
              onChange={evt => {
                formik.setFieldValue(evt.target.name, evt.target.value);
                formik.setFieldTouched(evt.target.name, true, false);
              }}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email && Boolean(formik.errors.email)
                  ? 'Invalid email address'
                  : null
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              label="Password"
              name="password"
              onFocus={() => onResetErrorMessage()}
              onChange={evt => {
                formik.setFieldValue(evt.target.name, evt.target.value);
                formik.setFieldTouched(evt.target.name, true, false);
              }}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onClickShowPassword={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
              helperText={
                formik.touched.password && Boolean(formik.errors.password)
                  ? 'Required'
                  : null
              }
            />
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                disabled={
                  formik.isSubmitting ||
                  !formik.isValid ||
                  Object.keys(formik.touched).length < 1
                }
              >
                <FormattedMessage {...messages.login} />
              </Button>
            )}
          </Grid>
        </Grid>
      </Wrapper>
    </form>
  );
}

LoginPage.propTypes = {
  api: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
  }),
  onRequestLogin: PropTypes.func,
  onResetErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  api: makeSelectLoginAction(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestLogin: payload => dispatch(requestLogin(payload)),
    onResetErrorMessage: () => dispatch(resetErrorMessage()),
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
