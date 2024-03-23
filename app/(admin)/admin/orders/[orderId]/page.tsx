import { orders } from '@/lib/data/order.data';
import { cn } from '@/lib/utils';

type OrderDetailsPageProps = {
  params: { orderId: string };
};

export default function OrderDetailsPage({
  params: { orderId },
}: OrderDetailsPageProps) {
  const [order] = orders.filter((order) => order.orderId === orderId);

  if (!order)
    return <p className='text-center font-semibold'>No Order Found</p>;

  const { name, price, products, status, discount } = order;

  return (
    <div className='mx-auto max-w-[450px] rounded-md bg-white p-6 shadow'>
      <div className='mb-1 flex w-full items-center justify-between'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p
          className={cn(
            'w-fit rounded px-3 py-[2px] text-xs uppercase text-white',
            status === 'pending' ? 'bg-orange-100 text-orange-500' : '',
            status === 'delivered' ? 'bg-green-100 text-green-500' : '',
            status === 'cancelled' ? 'bg-red-100 text-red-500' : '',
          )}
        >
          {status}
        </p>
      </div>
      <div className='flex items-center gap-3'>
        <h4 className='font-semibold'>Product Ordered : </h4>
        {products.map((product) => (
          <li className='list-none' key={product}>
            {product}
          </li>
        ))}
      </div>
      <p className='mt-2'>
        Price : <span className='font-semibold'>{price} ৳</span>
      </p>
      {discount && (
        <p className='mt-2'>
          Discount : <span className='font-semibold'>{discount} ৳</span>
        </p>
      )}
    </div>
  );
}
