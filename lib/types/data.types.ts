import { ReactNode } from 'react';

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
  phone: string;
  password: string;
};

export type ServerResponseType<DataType> = {
  ok: boolean;
  message: string;
  data?: DataType;
};

export type CartType = {
  product: ProductType;
  count: number;
};

export type SidebarLinkType = {
  title: string;
  href: string;
  icon: ReactNode;
};
