/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const enTranslationMessages = require('./translations/en.json');
const daTranslationMessages = require('./translations/da.json');

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'da',
];

// Using new polyfill, guide: https://formatjs.io/docs/react-intl/upgrade-guide-3x/#migrate-to-using-native-intl-apis
if (!window.Intl || window.Intl.PluralRules) {
  // eslint-disable-next-line global-require
  require('@formatjs/intl-pluralrules/polyfill');
  // eslint-disable-next-line global-require
  require('@formatjs/intl-pluralrules/locale-data/en');
}

// Using new polyfill, guide: https://formatjs.io/docs/react-intl/upgrade-guide-3x/#migrate-to-using-native-intl-apis
if (!window.Intl || window.Intl.RelativeTimeFormat) {
  // eslint-disable-next-line global-require
  require('@formatjs/intl-relativetimeformat/polyfill');
  // eslint-disable-next-line global-require
  require('@formatjs/intl-relativetimeformat/locale-data/en');
}

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  da: formatTranslationMessages('da', daTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
