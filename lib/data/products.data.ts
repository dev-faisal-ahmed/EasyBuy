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
  {
    productId: 'p5',
    name: 'High-Resolution Monitor',
    image: 'https://i.ibb.co/FVmG3Kz/monitor.jpg',
    price: 27999,
    review: {
      rating: 4.7,
      reviewCount: 22,
    },
    description:
      'Enhance your visual experience with our High-Resolution Monitor, offering crisp details and vibrant colors for an immersive viewing experience.',
  },
  {
    productId: 'p6',
    name: 'Advanced Processor',
    image: 'https://i.ibb.co/ccmw3c6/processor.jpg',
    price: 14499,
    review: {
      rating: 4.9,
      reviewCount: 30,
    },
    description:
      "Boost your system performance with our Advanced Processor. With lightning-fast speeds and multi-core efficiency, it's the perfect choice for power users and gamers alike.",
  },
  {
    productId: 'p7',
    name: 'Noise-Canceling Headphones',
    image: 'https://i.ibb.co/71zsBMd/headphone.jpg',
    price: 3699,
    review: {
      rating: 4.5,
      reviewCount: 25,
    },
    description:
      'Immerse yourself in your favorite tunes without distractions with our Noise-Canceling Headphones. Enjoy crystal-clear sound quality and long-lasting comfort.',
  },
  {
    productId: 'p8',
    name: 'Next-Gen Gaming Console (PS5)',
    image: 'https://i.ibb.co/CJWqXDX/ps5.jpg',
    price: 54999,
    review: {
      rating: 4.8,
      reviewCount: 40,
    },
    description:
      'Experience the future of gaming with the Next-Gen Gaming Console (PS5). Enjoy stunning graphics, lightning-fast load times, and immersive gaming experiences like never before.',
  },
  {
    productId: 'p9',
    name: 'Mechanical Gaming Keyboard',
    image: 'https://i.ibb.co/k2xtxCM/key-board.webp',
    price: 6999,
    review: {
      rating: 4.6,
      reviewCount: 18,
    },
    description:
      "Dominate the competition with our Mechanical Gaming Keyboard. Featuring responsive keys and customizable backlighting, it's the perfect tool for every gaming enthusiast.",
  },
];
