type ReviewType = {
  rating: number;
  reviewCount: number;
};

export type ProductType = {
  productId: string;
  name: string;
  image: string;
  description: string;
  price: number;
  discount?: number;
  review?: ReviewType;
};

export type UserType = {
  name: string;
  email: string;
  password: string;
};
