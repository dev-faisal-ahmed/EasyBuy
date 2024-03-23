import { Container } from '@/components/shared/Container';
import { CustomerDetails } from './_components/CustomerDetails';

type ProfileProductPageProps = {
  params: { phone: string };
};

export default async function ProductDetailsPage({
  params: { phone },
}: ProfileProductPageProps) {
  return (
    <Container className='my-6'>
      <CustomerDetails phone={phone} />
    </Container>
  );
}
