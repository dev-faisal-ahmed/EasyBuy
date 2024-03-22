import { ProductType } from '../types/data.types';

export const products: ProductType[] = [
  {
    productId: 'p1',
    name: 'Intercom Telephone',
    image: 'https://i.ibb.co/6Wgbmfd/telephone.jpg',
    price: 17580,
    review: {
      rating: 4.3,
      reviewCount: 16,
    },
    description:
      'Stay connected with the sleek and efficient Intercom Telephone, featuring crystal-clear audio and user-friendly design.',
  },
  {
    productId: 'p2',
    name: 'Intercom Speaker',
    image: 'https://i.ibb.co/F6sKNDn/speaker.jpg',
    price: 5280,
    discount: 25,
    review: {
      rating: 3.6,
      reviewCount: 16,
    },
    description:
      'Experience immersive sound with the Intercom Speaker. Compact yet powerful, it is perfect for any space.',
  },

  {
    productId: 'p3',
    name: 'Canon Camera',
    image: 'https://i.ibb.co/p2k0Y8f/camera.jpg',
    price: 53200,
    discount: 5,
    review: {
      rating: 4.3,
      reviewCount: 52,
    },
    description:
      'Capture moment of life in stunning detail with the Canon Camera. Professional-grade features in a compact package.',
  },

  {
    productId: 'p4',
    name: 'Macbook Air',
    image: 'https://i.ibb.co/tmBYYhm/laptop.jpg',
    price: 121500,
    review: {
      rating: 4.5,
      reviewCount: 19,
    },
    description:
      'Experience unparalleled performance and portability with the Macbook Air. Perfect for work or entertainment on the go.',
  },
];
