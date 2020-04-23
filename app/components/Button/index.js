/**
 *
 * Button.js
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

function Button({
  color = 'default',
  onClick,
  children,
  component = 'button',
  fullWidth = false,
  disabled = false,
}) {
  return (
    <Wrapper>
      <MUIButton
        color={color}
        onClick={onClick}
        component={component}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {Children.toArray(children)}
      </MUIButton>
    </Wrapper>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOf(['button', 'submit']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
