/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { notification } from 'antd';
import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.css';
import 'styles/index.scss';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./images/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./images/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./images/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./images/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./images/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./images/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';


// reDefine window.alert functin
notification.config({
  top: '50%',
  duration: 3,
});

window.alert = (title = 'Error', message = '错误信息', type = 'error') => {
  if (typeof title !== 'string') {
    return console.error(`alert的title类型不是字符串,当前title为${title},当前title类型为${typeof title}`);
  } else if (typeof message !== 'string') {
    return console.error(`alert的message类型不是字符串,当前message为${message},当前message类型为${typeof message},`);
  }
  const typeList = ['success', 'error', 'info', 'warning'];
  if (!typeList.includes(type)) {
    return console.error('alert类型不正确!,正确类型有success, error, info, warning');
  }

  const key = new Date().getTime();
  notification[type]({
    key,
    message: title,
    description: message,
  });
  return key;
};

window.alert.close = (key) => {
  notification.close(key);
};

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/zh.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

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
