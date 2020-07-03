/**
 *
 * Seo
 *
 * Intl usage ref: https://medium.com/javascript-in-plain-english/internationalization-in-react-apps-using-react-intl-1d72a6f14053
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';

import { useIntl } from 'react-intl';
import messages from './messages';

function Seo(props) {
  const intl = useIntl();

  const { lang, title, description, meta } = props;

  const pageTitle = Yup.string()
    .required()
    .min(1)
    .isValidSync(title)
    ? title
    : intl.formatMessage({ ...messages.defaultTitle });

  const metaDescription = Yup.string()
    .required()
    .min(1)
    .isValidSync(description)
    ? title
    : intl.formatMessage({ ...messages.defaultDescription });

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${intl.formatMessage({ ...messages.webAppName })}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Pintu Software Sdn. Bhd.',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
};

Seo.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default Seo;
