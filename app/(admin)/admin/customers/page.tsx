import { CustomerTable } from './_components/CustomerTable';
import { AddCustomer } from './_components/AddCustomer';

export default function CustomerPage() {
  return (
    <section className='px-5'>
      <AddCustomer />
      <CustomerTable />
    </section>
  );
}
