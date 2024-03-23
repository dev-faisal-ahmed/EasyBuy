import { useAppSelector } from '@/redux/redux.hook';
import { useMemo } from 'react';
import { CartItem } from '../../_component/navbar/cart/CartItem';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function CartRelatedInfo() {
  const { cart } = useAppSelector((state) => state.cart);

  const subTotal = useMemo(
    () =>
      cart.reduce((total, cartItem) => {
        total += cartItem.product.price * cartItem.count;
        return total;
      }, 0),
    [cart],
  );

  return (
    <div className='w-full'>
      {cart.length ? (
        <>
          <h2 className='mb-3 mt-5 text-xl font-bold'>Order Details</h2>
          <div className='flex flex-col gap-3'>
            {cart.map((item) => (
              <CartItem
                key={item.product.productId}
                className='bg-white'
                {...item}
              />
            ))}
          </div>
          <div className='mt-6 rounded-md bg-white p-6'>
            <BetweenContainer title='Subtotal' value={subTotal} />
            <BetweenContainer title='Tax' value={subTotal * 0.05} />
            <div className='mb-2' />
            <div className='mt-5 flex w-full cursor-pointer items-center justify-between rounded-md bg-primary px-3 py-2 text-base font-semibold text-white'>
              <p>Total</p>
              <p>{subTotal + subTotal * 0.05} ৳</p>
            </div>
          </div>
        </>
      ) : (
        <p className='mt-5 text-center font-semibold'>
          Nothing is selected in the cart
        </p>
      )}
    </div>
  );
}

type BetweenContainerProps = {
  title: string;
  value: number;
  titleClass?: string;
  valueClass?: string;
};

function BetweenContainer({
  title,
  value,
  titleClass,
  valueClass,
}: BetweenContainerProps) {
  return (
    <div className='flex items-center justify-between px-4 text-base font-semibold'>
      <p className={cn('text-gray-600', titleClass)}>{title}</p>
      <p className={cn('text-gray-600', valueClass)}>{value} ৳</p>
    </div>
  );
}
