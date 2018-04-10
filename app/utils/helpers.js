import CryptoJS from 'crypto-js';
import _ from 'lodash';
import queryString from 'query-string';
import { isMobile } from 'react-device-detect';

import {
  IMG_SERVER_URL,
}
from 'apis/firebase-config';

export function printByDomId(domId) {
  document.getElementById('print-area').innerHTML = '';
  document.getElementById('print-area').innerHTML = document.getElementById(domId).outerHTML;
  window.print();
}

export function getResizeImageUrl(url) {
  if (!url || url.slice(0, 4) === 'http') return url;
  const mobileDimension = '320x240';
  const normalDimension = '640x480';
  if (isMobile) {
    return `${IMG_SERVER_URL}/${mobileDimension}/inventories/${url}?1`;
  }
  return `${IMG_SERVER_URL}/${normalDimension}/inventories/${url}?1`;
}

export function getImageUrl(url, size = '') {
  const sizePath = size ? `${size}/` : '';
  return `${IMG_SERVER_URL}/${sizePath}${url}`;
}

export function trackEvent({
  eventName,
  eventData,
}) {
  window.Intercom('trackEvent', eventName, eventData);
  const keys = Object.keys(eventData);
  const values = Object.values(eventData);
  if (window.ga) {
    keys.forEach((key, i) => {
      const value = values[i];
      window.ga('send', {
        hitType: 'event',
        eventCategory: eventName,
        eventAction: key,
        eventLabel: value,
      });
    });
  }
}

export function getEnvironment() {
  return location.hostname === 'localhost' ? 'dev' : 'prod';
}

export function getImageBlobMD5(blob) {
  const mdsum = CryptoJS.MD5(blob);
  return mdsum;
}

export function generateRandomId(prefix, suffix, length) {
  let id = prefix;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let i = length;
  while (i > 0) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
    i -= 1;
  }
  id += suffix;

  return id;
}

export function generateTimeStampId(prefix, length) {
  let id = prefix;
  const timeStamp = new Date().valueOf().toString();
  id += timeStamp.slice(-length);
  return id;
}

export function getStaticApiUrl(fileName) {
  const path = 'https://img.lendingcar.com/api/';
  const date = new Date();
  const refreshNum = `${date.getDate()}-${date.getHours()}`;
  return `${path + fileName}?${refreshNum}`;
}

export const getRandomString = (length = 12) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return _.map(Array(length), () => possible.charAt(Math.floor(Math.random() * possible.length)))
    .join('');
};

export const isValidFirebaseEndPoint = (firebaseEndPoint) => {
  if (!firebaseEndPoint) return false;
  const path = (typeof firebaseEndPoint === 'string') ? firebaseEndPoint.split('/') : firebaseEndPoint;
  return path.every((d) => d);
};

export const optionsPost = (data = '') => {
  let bodyData = data;
  if (typeof data === 'object') {
    bodyData = queryString.stringify(data);
  }
  const headers = {
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  };
  return {
    method: 'POST',
    headers,
    body: bodyData,
  };
};

export const optionsGet = () => ({
  method: 'GET',
  headers: {
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
});

export const optionsGetWithHeaders = (data) => ({
  method: 'GET',
  headers: {
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    ...data,
  },
});

export const getOppositeBoolean = (value) => !value || value.toString().toLowerCase() === 'false';

export const getSameBoolean = (value) => !getOppositeBoolean(value);

export const getFileMimeTypeByFileExt = (filePath) => {
  const ext = filePath.split('.')[1];
  switch (ext) {
    case 'jpg':
      return 'image/jpeg';
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'bmp':
      return 'image/bmp';
    case 'gif':
      return 'image/gif';
    case 'pdf':
      return 'application/pdf';
    case 'zip':
      return 'application/zip';
    case 'doc':
      return 'application/msword';
    case 'json':
      return 'application/json';
    case 'txt':
      return 'text/plain';
    case 'html':
      return 'text/html';
    case 'csv':
      return 'text/csv';
    default:
      return 'application/octet-stream';
  }
};

export const getCurrentRoute = (routes, routeName) =>
_.find(routes, (route) => route.name === routeName);

export const getParentsRoute = (routes, routeName) => {
  const currentRoute = getCurrentRoute(routes, routeName);
  let parents = currentRoute.parents;
  if (!parents || !parents.length) parents = ['landingPage'];
  parents = [...parents, routeName];

  return parents.map((name) => {
    const current = getCurrentRoute(routes, name);
    return {
      path: current.path,
      name,
    };
  });
};
