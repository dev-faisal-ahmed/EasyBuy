import { Container } from '@/components/shared/Container';
import { SERVER_ADDRESS } from '@/config/config';
import { CustomerType } from '@/lib/types/data.types';
import { CustomerDetails } from './_components/CustomerDetails';

async function getSingleCustomer(phone: string) {
  const response = await fetch(`${SERVER_ADDRESS}/api/customers/${phone}`);
  const data = await response.json();
  return (data as CustomerType) || null;
}

type ProfileProductPageProps = {
  params: { phone: string };
};

export default async function ProductDetailsPage({
  params: { phone },
}: ProfileProductPageProps) {
  const customer = await getSingleCustomer(phone);

  return (
    <Container className='my-6'>
      {customer ? (
        <CustomerDetails customer={customer} />
      ) : (
        <p className='text-center font-semibold'>No Customer Found</p>
      )}
    </Container>
  );
}
