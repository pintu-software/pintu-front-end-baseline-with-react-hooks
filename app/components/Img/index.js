/**
 *
 * Img
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return <img src={props.src} alt={props.alt} width={props.width} height={props.height} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default memo(Img);
