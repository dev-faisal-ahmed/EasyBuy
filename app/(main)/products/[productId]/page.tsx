import { Container } from '@/components/shared/Container';
import { ProductDetails } from './_components/ProductDetails';
import { products } from '@/lib/data/products.data';

type ProfileProductPageProps = {
  params: { productId: string };
};

export default async function ProductDetailsPage({
  params: { productId },
}: ProfileProductPageProps) {
  const [product] = products.filter((el) => el.productId === productId);

  return (
    <Container className='my-6'>
      {product ? (
        <ProductDetails {...product} />
      ) : (
        <p className='text-center font-semibold'>No Product Found</p>
      )}
    </Container>
  );
}
