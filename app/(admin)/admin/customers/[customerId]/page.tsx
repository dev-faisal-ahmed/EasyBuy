import { Container } from '@/components/shared/Container';
import { SERVER_ADDRESS } from '@/config/config';
import { CustomerType, ProductType } from '@/lib/types/data.types';
import { CustomerDetails } from './_components/CustomerDetails';

async function getSingleCustomer(productId: string) {
  const response = await fetch(`${SERVER_ADDRESS}/api/customers/${productId}`);
  const data = await response.json();
  return (data as CustomerType) || null;
}

type ProfileProductPageProps = {
  params: { customerId: string };
};

export default async function ProductDetailsPage({
  params: { customerId },
}: ProfileProductPageProps) {
  const customer = await getSingleCustomer(customerId);

  return (
    <Container className='my-6'>
      {customer ? (
        <CustomerDetails customer={customer} />
      ) : (
        <p className='text-center font-semibold'>No Product Found</p>
      )}
    </Container>
  );
}
