import { CustomerType } from '@/lib/types/data.types';

type CustomerDetailsProps = {
  customer: CustomerType;
};
export function CustomerDetails({ customer }: CustomerDetailsProps) {
  const { name, address, phone, purchase, userStatus } = customer;
  return (
    <div className='mx-auto flex max-w-[450px] gap-6 rounded-md bg-white p-6 shadow'>
      <div>
        <div className='flex size-20 items-center justify-center rounded-full bg-purple-500 text-4xl font-bold uppercase text-white'>
          {name[0]}
        </div>
      </div>
      <div className='w-full'>
        <div className='mb-1 flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <p className=' w-fit rounded bg-blue-800 px-3 py-[2px] text-xs uppercase text-white'>
            {userStatus}
          </p>
        </div>
        <p>Phone : {phone}</p>
        <p>{address}</p>
        <p className='mt-3'>
          Total Spend :{' '}
          <span className='font-semibold'>{purchase.totalSpent}</span> ৳
        </p>
        <p>
          Total Orders : <span className='font-semibold'>{purchase.total}</span>
        </p>
      </div>
    </div>
  );
}
