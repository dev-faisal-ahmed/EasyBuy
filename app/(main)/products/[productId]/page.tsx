import { Container } from '@/components/shared/Container';
import { SERVER_ADDRESS } from '@/config/config';
import { ProductType } from '@/lib/types/data.types';
import { ProductDetails } from './_components/ProductDetails';

async function getSingleProduct(productId: string) {
  const response = await fetch(`${SERVER_ADDRESS}/api/products/${productId}`);
  const data = await response.json();
  return (data as ProductType) || null;
}

type ProfileProductPageProps = {
  params: { productId: string };
};

export default async function ProductDetailsPage({
  params: { productId },
}: ProfileProductPageProps) {
  const product = await getSingleProduct(productId);

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
