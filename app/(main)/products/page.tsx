import { Container } from '@/components/ui/Container';
import { AllProducts } from './_components/AllProducts';

export default function Products() {
  return (
    <Container className='mt-5 w-full'>
      <AllProducts allProducts={[]} />
    </Container>
  );
}
