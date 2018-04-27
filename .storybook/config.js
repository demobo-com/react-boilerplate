import { configure, setAddon, addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import infoAddon from '@storybook/addon-info';

import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../app/configureStore';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.css';
import '../app/styles/index.scss';
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
setAddon(infoAddon);

const req = require.context('../app', true, /(stor(y|ies).js|.stor(y|ies).js$)/);

function loadStories() {
  req.keys().forEach(filename => {
    localStorage.filename = filename;
    return req(filename)
  });
}

configure(loadStories, module);

const pageSize = (width) => {
  const object = {
    xl: width > 1200,
    lg: width <= 1200 && width > 992,
    md: width <= 992 && width > 768,
    sm: width <= 768 && width > 480,
    xs: width <= 480,
  };
  const index = Object.values(object).indexOf(true);
  return Object.keys(object)[index];
};

window.onresize = () => {
  const { innerWidth } = window;
  // console.log('innerWidth', typeof innerWidth, innerWidth);
  const object = {
    xl: innerWidth / 1200,
    lg: innerWidth / 1000,
    md: innerWidth / 800,
    sm: innerWidth / 700,
    xs: innerWidth / 400,
  };
  const size = pageSize(innerWidth);
  document.querySelector('html').style.fontSize = `${object[size]}px`;
};
