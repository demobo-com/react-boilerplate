import fill from 'lodash/fill';

const products = fill(new Array(100), 0).map((item, index) => (
  {
    id: index,
    productName: 'productName',
    images: ['', '', '', ''],
    fundingBase: 1,
    percentage: 30,
    fundingPeriod: 3,
    fundingInterestRate: 10,
    fundingRating: 'A',
    year: 2018,
    vin: '01010101',
    mileage: 1000,
    accident: 0,
    price: 10000,
  }
));

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
  displayRow: {
    totalVolume: 46998012,
    totalUsers: 264223,
    totalCars: 130,
    investors: 188,
    totalCompany: 130,
  },
};

export default fakeData;
