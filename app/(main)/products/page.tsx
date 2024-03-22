import { Container } from '@/components/ui/Container';
import { AllProducts } from './_components/AllProducts';
import { SERVER_ADDRESS } from '@/config/config';
import { ProductType } from '@/lib/types/data.types';

const getProducts = async () => {
  const response = await fetch(`${SERVER_ADDRESS}/api/products`);
  const data = await response.json();
  return data as ProductType[];
};

export default async function Products() {
  const allProducts = await getProducts();

  return (
    <Container className='w-full'>
      <AllProducts allProducts={allProducts} />
    </Container>
  );
}
