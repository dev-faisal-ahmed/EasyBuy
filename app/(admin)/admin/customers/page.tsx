import { SERVER_ADDRESS } from '@/config/config';
import { CustomerTable } from './_components/CustomerTable';
import { CustomerType } from '@/lib/types/data.types';

const getProducts = async () => {
  const response = await fetch(`${SERVER_ADDRESS}/api/customers`);
  const data = await response.json();
  return data as CustomerType[];
};

export default async function CustomerPage() {
  const customers = await getProducts();

  return (
    <section className='px-5'>
      <div className='overflow-auto'>
        <CustomerTable allCustomers={customers} />
      </div>
    </section>
  );
}
