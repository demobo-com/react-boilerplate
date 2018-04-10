import { configure, addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../app/configureStore';

// import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.css';
// import '../app/styles/index.scss';
import { translationMessages } from '../app/i18n';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
addDecorator(story => <Provider store={store}>{story()}</Provider>);

const getMessages = (locale) => translationMessages[locale];
setIntlConfig({
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    getMessages
});
addDecorator(withIntl);

const req = require.context('../app', true, /(stor(y|ies).js|.stor(y|ies).js$)/);

function loadStories() {
  req.keys().forEach(filename => {
    localStorage.filename = filename;
    return req(filename)
  });
}

configure(loadStories, module);
