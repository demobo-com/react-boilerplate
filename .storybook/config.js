import { configure, addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
// import 'sanitize.css/sanitize.css';
import { translationMessages } from '../app/i18n';

const getMessages = (locale) => translationMessages[locale];

setIntlConfig({
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    getMessages
});
addDecorator(withIntl);

const req = require.context('../app', true, /(stor(y|ies).js|.stor(y|ies).js$)/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
