/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import MUIButton from '@material-ui/core/Button';
import theme from 'utils/ui/theme';

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
}) {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <MUIButton
          color={color}
          onClick={onClick}
          component={component}
          fullWidth={fullWidth}
        >
          {Children.toArray(children)}
        </MUIButton>
      </ThemeProvider>
    </Wrapper>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOf(['button', 'submit']),
  fullWidth: PropTypes.bool,
};

export default Button;
