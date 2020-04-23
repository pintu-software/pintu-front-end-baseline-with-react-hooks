/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import { primary } from 'utils/ui/palette';

const A = styled.a`
  color: ${primary.main};

  &:hover {
    color: ${primary.dark};
  }
`;

export default A;
