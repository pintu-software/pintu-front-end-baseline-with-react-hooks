/**
 *
 * PasswordField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function PasswordField({
  label,
  name,
  onChange,
  value,
  error,
  onClickShowPassword,
  showPassword,
}) {
  return (
    <TextField
      label={label}
      placeholder={`Enter ${label}`}
      type={showPassword ? 'text' : 'password'}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      error={error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

PasswordField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClickShowPassword: PropTypes.func,
  showPassword: PropTypes.bool,
};

export default PasswordField;
