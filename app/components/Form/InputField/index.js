/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

function InputField({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  error,
}) {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
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
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default InputField;
