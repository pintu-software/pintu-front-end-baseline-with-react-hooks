/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

const CenteredSection = styled.section`
  text-align: center;
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <Typography variant="h2">
            <FormattedMessage {...messages.startProjectHeader} />
          </Typography>
          <Typography>
            <FormattedMessage {...messages.startProjectMessage} />
          </Typography>
        </CenteredSection>
      </div>
    </article>
  );
}

export default compose(memo)(HomePage);
