/**
 *
 * SelectField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

function SelectField({
  disabled,
  label,
  name,
  onChange,
  value,
  options,
  error,
  helperText,
  onFocus,
  informativeText,
}) {
  const labelId = `select-label-${name}`;
  return (
    <FormControl>
      <InputLabel id={labelId} error={error}>
        {label}&nbsp;
        {informativeText && informativeText !== '' && (
          <Tooltip title={informativeText} arrow>
            <InfoIcon />
          </Tooltip>
        )}
      </InputLabel>
      <Select
        labelId={labelId}
        id={`select-${name}`}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        error={error}
      >
        <MenuItem value="" disablePadding>
          <em>{`Select ${label}`}</em>
        </MenuItem>
        {options.map(option => (
          <MenuItem key={`dropdown-option-${option.value}`} value={option.value} disablePadding>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

SelectField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onFocus: PropTypes.func,
  informativeText: PropTypes.string,
};

export default SelectField;
