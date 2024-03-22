import { ProductType } from '@/lib/types/data.types';
import { PriceFilter } from './PriceFilter';

type AllProductsProps = {
  allProducts: ProductType[];
};

export function AllProducts({ allProducts }: AllProductsProps) {
  return <PriceFilter />;
}
