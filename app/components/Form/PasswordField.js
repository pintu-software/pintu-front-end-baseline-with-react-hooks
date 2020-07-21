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
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

function PasswordField({
  label,
  name,
  onChange,
  value,
  error,
  onClickShowPassword,
  showPassword,
  helperText,
  onFocus,
  informativeText,
}) {
  return (
    <TextField
      label={
        <div>
          {label}&nbsp;
          {informativeText && informativeText !== '' && (
            <Tooltip title={informativeText} arrow>
              <InfoIcon />
            </Tooltip>
          )}
        </div>
      }
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
            <IconButton aria-label="toggle password visibility" onClick={onClickShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      helperText={helperText}
      onFocus={onFocus}
      InputLabelProps={{ style: { pointerEvents: 'auto' } }}
    />
  );
}

PasswordField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool,
  onClickShowPassword: PropTypes.func,
  showPassword: PropTypes.bool,
  helperText: PropTypes.string,
  onFocus: PropTypes.func,
  informativeText: PropTypes.string,
};

export default PasswordField;
