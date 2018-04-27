import fill from 'lodash/fill';
import { fromJS } from 'immutable';
const product = {
  id: 1,
  productName: 'productName',
  images: ['', '', '', ''],
  base: 1000,
  percentage: 30,
  period: 3,
  interestRate: 10,
  rating: 'A',
  year: 2018,
  vin: '01010101',
  mileage: 1000,
  accident: 0,
  price: 10000,
};
const products = fill(new Array(100), 0)
  .map((item, index) => (
    fromJS(product)
    .set('id', index)
    .set('base', Math.ceil(Math.random() * 1000))
    .set('percentage', Math.ceil(Math.random() * 50))
    .set('period', Math.ceil(Math.random() * 10))
    .set('interestRate', Math.ceil(Math.random() * 20))
    .set('mileage', Math.ceil(Math.random() * 100) * 10)
    .set('accident', Math.floor(Math.random() * 3))
    .set('price', Math.ceil(Math.random() * 1000) * 10)
    .toJS()
  )
);

const fakeData = {
  users: {
    1: {
      uid: '1',
      email: 'test1@abc.com',
      password: '1234567',
      nickName: 'test1',
      firstName: 'Test1',
      lastName: 'Gan1',
      phoneNumber: '8097887861',
      emailVerified: true,
      accessToken: '1',
      refreshToken: '1',
    },
    2: {
      uid: '2',
      email: 'test2@abc.com',
      password: '1234567',
      nickName: 'test2',
      firstName: 'Test2',
      lastName: 'Gan2',
      phoneNumber: '8097887861',
      accessToken: '2',
      refreshToken: '2',
      emailVerified: false,
    },
  },
  products,
  product,
  displayRow: {
    totalVolume: 46998012,
    totalUsers: 264223,
    totalCars: 130,
    investors: 188,
    totalCompany: 130,
  },
};

export default fakeData;
