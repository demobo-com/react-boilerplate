import { isMobile } from 'react-device-detect';
const IMG_SERVER_URL = '';

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

export const getOppositeBoolean = (value) => !value || value.toString().toLowerCase() === 'false';

export const getSameBoolean = (value) => !getOppositeBoolean(value);

export const neededMoney = (price, basePrice) => {
  const priceNumber = Number(price);
  const basePriceNumber = Number(basePrice);
  let neededPrice = Math.floor((Number(priceNumber) * 0.7) / basePriceNumber);
  neededPrice *= basePriceNumber;
  return Number(neededPrice);
};

export const percentage = (price, basePrice, collected) => {
  const neededPrice = neededMoney(price, basePrice);
  const percentageFloor = (Number(collected) / neededPrice) * 100;
  return Math.floor(percentageFloor);
};

export const specificNumberFormatter = (d) => Number(d).toFixed(2).toLocaleString();
export const numberFormatter = (d) => Number(d).toLocaleString();
export const dollarFormatter = (d) => `$ ${numberFormatter(d)}`;
export const percentageFormatter = (d) => `${numberFormatter(d)}%`;
export const dayFormatter = (d) => `${numberFormatter(d)} Days`;
