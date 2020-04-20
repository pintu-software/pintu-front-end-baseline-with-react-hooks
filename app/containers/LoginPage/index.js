/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Button from 'components/Button';
import { InputField } from 'components/Form';

import { changeEmail } from './actions';
import { makeSelectForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'login';

export function LoginPage({ form, onChangeEmail }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Button>Test</Button>
      <InputField
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter email address"
        onChange={onChangeEmail}
        value={form.email}
        // error={error}
      />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LoginPage.propTypes = {
  form: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  onChangeEmail: PropTypes.func,
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
