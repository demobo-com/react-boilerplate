const fakeData = {
  users: {
    1: {
      uid: '1',
      email: 'test1@lendingcar.com',
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
      email: 'test2@lendingcar.com',
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
  performance: {
    totalVolume: 49000000,
    totalUsers: 130000,
    totalCars: 3500000,
  },
  products: [
    { id: 1, interestRate: 1, rating: 1, percentage: 1, base: 1, period: 1, make: 'make', model: 'model', images: ['', '', ''] },
    { id: 2, interestRate: 1, rating: 1, percentage: 1, base: 1, period: 1, make: 'make', model: 'model', images: ['', '', ''] },
    { id: 3, interestRate: 1, rating: 1, percentage: 1, base: 1, period: 1, make: 'make', model: 'model', images: ['', '', ''] },
    { id: 4, interestRate: 1, rating: 1, percentage: 1, base: 1, period: 1, make: 'make', model: 'model', images: ['', '', ''] },
    { id: 5, interestRate: 1, rating: 1, percentage: 1, base: 1, period: 1, make: 'make', model: 'model', images: ['', '', ''] },
  ],
  product: {
    1: { images: ['', '', ''] },
    2: { images: ['', '', ''] },
    3: { images: ['', '', ''] },
    4: { images: ['', '', ''] },
  },
  displayRow: {
    totalVolume: 46998012,
    totalUsers: 264223,
    totalCars: 130,
    investors: 188,
    totalCompany: 130,
  },
};

export default fakeData;
