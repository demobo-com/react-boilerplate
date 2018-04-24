import ModuleImage from './assets/moduleImage.png';
import moduleImageEn from './assets/moduleImageEn.png';
import ModuleImage1 from './assets/moduleImage1.png';
import ModuleImage2 from './assets/moduleImage2.png';
import ModuleImage3 from './assets/moduleImage3.png';

export const HOME_INFO = [
  {
    title: 'hopeSee',
    image: ModuleImage,
    image_en: moduleImageEn,
    text: [
      {
        messageId: 'yourInterests',
      },
      {
        messageId: 'hopeInfo',
      },
      {
        messageId: 'reason',
      },
    ],
  },
  {
    title: 'investment',
    image: ModuleImage1,
    image_en: ModuleImage1,
    text: [
      {
        messageId: 'investmentInfo',
        color: false,
      },
      {
        messageId: 'lendingcarInfo',
        messageNote: 'lendingcar',
        messageNoteColor: true,
      },
      {
        messageId: 'linkAbout',
        color: true,
        linkId: 'https://www.lendingcar.com/',
      },
    ],
  },
  {
    title: 'team',
    image: ModuleImage2,
    image_en: ModuleImage2,
    text: [
      {
        messageId: 'teamInfo',
      },
      {
        messageId: 'teamForYou',
      },
      {
        messageId: 'linkTeam',
        color: true,
        linkId: '/products',
      },
    ],
  },
  {
    title: 'system',
    image: ModuleImage3,
    image_en: ModuleImage3,
    text: [
      {
        messageId: 'systemInfo',
      },
      {
        messageId: 'joinUs',
      },
      {
        messageId: 'linkLogin',
        messageNote: 'linkSingUp',
        linkId: '/login',
        noteLinkId: '/signUp',
        color: true,
        messageNoteColor: true,
      },
    ],
  },
];
