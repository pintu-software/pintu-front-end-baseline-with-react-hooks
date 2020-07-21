/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

function InputField({
  label,
  type,
  name,
  onChange,
  value,
  error,
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
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      error={error}
      helperText={helperText}
      onFocus={onFocus}
      InputLabelProps={{ style: { pointerEvents: 'auto' } }}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onFocus: PropTypes.func,
  informativeText: PropTypes.string,
};

export default InputField;
