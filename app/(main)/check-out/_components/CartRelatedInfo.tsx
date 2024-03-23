import { useAppSelector } from '@/redux/redux.hook';
import { useMemo } from 'react';
import { CartItem } from '../../_component/navbar/cart/CartItem';

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
      <h3 className='text-lg font-semibold'>Check Out</h3>
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
          <div className='mt-6'>
            <BetweenContainer title='Subtotal' value={subTotal} />
            <BetweenContainer title='Tax' value={subTotal * 0.05} />
            <hr />
            <BetweenContainer
              title='Total'
              value={subTotal + subTotal * 0.05}
            />
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
};

function BetweenContainer({ title, value }: BetweenContainerProps) {
  return (
    <div className='flex items-center justify-between text-base font-semibold'>
      <p className='text-gray-700'>{title}</p>
      <p>{value} ৳</p>
    </div>
  );
}
