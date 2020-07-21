/**
 *
 * Register
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from 'components/Button';
import { InputField, PasswordField, SelectField } from 'components/Form';
import { ShowHelperText } from 'components/Form/helpers';

import { createUser, resetErrorMessage } from './actions';
import { makeSelectRegisterApiStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

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
const NAME_REGEX = new RegExp(/^[0-9a-zA-Z]+([\s\-'][0-9a-zA-Z]+){0,}$/);
const MAX_NAME_LENGTH = 20;

const MIN_CHARACTERS = 8;
const MAX_CHARACTERS = 20;
const SPECIAL_CHARACTER = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /[\^$*.[\]{}()?\-"!@#%&\/\\,><':;|_~`]/,
);
const ONE_NUMBER = new RegExp(/.*[0-9].*/);
const UPPERCASE_CHARACTER = new RegExp(/(?=.*[A-Z])/);
const LOWERCASE_CHARACTER = new RegExp(/(?=.*[a-z])/);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email('Invalid email'),
  password: Yup.string()
    .min(MIN_CHARACTERS, `Password should be at least ${MIN_CHARACTERS} characters`)
    .max(MAX_CHARACTERS, `Password should not be more than ${MAX_CHARACTERS} characters`)
    .matches(SPECIAL_CHARACTER, 'Password should contain at least one special character')
    .matches(ONE_NUMBER, 'Password should contain at least one number')
    .matches(UPPERCASE_CHARACTER, 'Password should contain at least one uppercase letter')
    .matches(LOWERCASE_CHARACTER, 'Password should contain at least one lowercase letter')
    .required('Required'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Repeat password must match with password',
  ),
  fullName: Yup.string()
    .required('Required')
    .matches(NAME_REGEX, {
      message: 'Invalid name',
    })
    .max(MAX_NAME_LENGTH, `Max ${MAX_NAME_LENGTH} characters`),
  title: Yup.string().required('Required'),
});

const TITLE_OPTIONS = [
  { label: 'Ms', value: 'Ms' },
  { label: 'Mr', value: 'Mr' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Miss', value: 'Miss' },
];

export function Register({ onCreateUser, api, onResetErrorMessage }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      fullName: '',
      title: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      onCreateUser(values);
      actions.setSubmitting(false);
    },
  });

  const { loading, error } = api;

  return (
    <form id="register-form" onSubmit={formik.handleSubmit}>
      <Wrapper>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2">Register</Typography>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error.message}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <InputField
              label="Full Name"
              name="fullName"
              onFocus={() => onResetErrorMessage()}
              onChange={evt => {
                formik.setFieldValue(evt.target.name, evt.target.value);
                formik.setFieldTouched(evt.target.name, true, false);
              }}
              value={formik.values.fullName}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={ShowHelperText({
                formik,
                fieldName: 'fullName',
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectField
              label="Title"
              name="title"
              onFocus={() => onResetErrorMessage()}
              onChange={evt => {
                formik.setFieldValue('title', evt.target.value);
                formik.setFieldTouched('title', true, false);
              }}
              value={formik.values.title}
              options={TITLE_OPTIONS}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={ShowHelperText({
                formik,
                fieldName: 'title',
              })}
            />
          </Grid>
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
              helperText={ShowHelperText({
                formik,
                fieldName: 'email',
              })}
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
              helperText={ShowHelperText({
                formik,
                fieldName: 'password',
              })}
              informativeText="Make sure it's at least 8 characters including a number, lowercase letter, uppercase letter and special character."
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              label="Repeat Password"
              name="repeatPassword"
              onFocus={() => onResetErrorMessage()}
              onChange={evt => {
                formik.setFieldValue(evt.target.name, evt.target.value);
                formik.setFieldTouched(evt.target.name, true, false);
              }}
              value={formik.values.repeatPassword}
              error={formik.touched.password && Boolean(formik.errors.repeatPassword)}
              onClickShowPassword={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
              helperText={ShowHelperText({
                formik,
                fieldName: 'repeatPassword',
              })}
            />
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                disabled={
                  formik.isSubmitting || !formik.isValid || Object.keys(formik.touched).length < 1
                }
              >
                Register
              </Button>
            )}
          </Grid>
        </Grid>
      </Wrapper>
    </form>
  );
}

Register.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
  api: PropTypes.object.isRequired,
  onResetErrorMessage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  api: makeSelectRegisterApiStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreateUser: payload => dispatch(createUser(payload)),
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
)(Register);
