import { Container } from '@/components/shared/Container';
import { AllProducts } from './_components/AllProducts';

export default async function Products() {
  return (
    <Container className='w-full'>
      <AllProducts />
    </Container>
  );
}
