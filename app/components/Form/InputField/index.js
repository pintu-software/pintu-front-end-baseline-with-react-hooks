/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function InputField({ label, type, name, onChange, value, error }) {
  return (
    <TextField
      label={label}
      placeholder={`Enter ${label}`}
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      error={error}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default InputField;
