import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Typography from '@material-ui/core/Typography';
import { common } from 'utils/ui/palette';
import messages from './messages';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  background: ${common.white};
`;

function Footer() {
  return (
    <Wrapper>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <Typography>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <A href="https:pintu.dk">Pintu Software Sdn. Bhd.</A>,
            }}
          />
        </Typography>
      </section>
    </Wrapper>
  );
}

export default Footer;
