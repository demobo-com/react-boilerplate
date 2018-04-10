// Firebase
import { getEnvironment } from 'utils/helpers';

export const firebaseConfig = {
  apiKey: 'AIzaSyDMRkzUKugI-UeCc8QUaa6FR7wHWYtQ2e0',
  authDomain: 'lending-car.firebaseapp.com',
  databaseURL: 'https://lending-car.firebaseio.com',
  projectId: 'lending-car',
  storageBucket: 'lending-car.appspot.com',
  messagingSenderId: '928691796952',
};

const env = getEnvironment();
export const CLOUD_BASE = env === 'dev' ? 'https://apidev.lendingcar.com' : 'https://api.lendingcar.com';
// export const CLOUD_BASE = 'https://apidev.lendingcar.com';
// export const CLOUD_BASE = env === 'dev' ? 'http://localhost:5000' : 'https://api.lendingcar.com';
// export const CLOUD_BASE = 'https://api.lendingcar.com';

export const IMG_SERVER_URL = 'https://img.lendingcar.com';
