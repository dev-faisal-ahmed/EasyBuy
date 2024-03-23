'use client';

import { CartType } from '@/lib/types/data.types';
import { cn } from '@/lib/utils';
import { addToCart, removeFromCart } from '@/redux/features/cart.slice';
import { useAppDispatch } from '@/redux/redux.hook';
import { Minus as MinusIcon, Plus as PlusIcon, X as XIcon } from 'lucide-react';
import Image from 'next/image';

type CartItemProps = CartType & {
  className?: string;
};

export function CartItem({ product, count, className }: CartItemProps) {
  const { image, name } = product;
  const dispatch = useAppDispatch();

  const handleCountChange = (count: number) => {
    dispatch(addToCart({ count, product }));
  };

  return (
    <div
      className={cn('flex gap-5 rounded-md bg-slate-100 p-3 shadow', className)}
    >
      <div>
        <Image
          className='h-full rounded-md object-cover object-center'
          src={image}
          width={80}
          height={50}
          alt={name}
        />
      </div>
      <div className='w-full'>
        <div className='flex w-full items-center justify-between'>
          <h3 className='font-semibold'>{name}</h3>
          <span
            onClick={() => dispatch(removeFromCart(product.productId))}
            className='cursor-pointer'
          >
            <XIcon size={18} />
          </span>
        </div>
        <div className='mt-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => handleCountChange(-1)}
              className='flex w-6 items-center justify-center rounded border'
            >
              <MinusIcon size={15} />
            </button>
            <p className='text-base font-semibold'>{count}</p>
            <button
              onClick={() => handleCountChange(1)}
              className='flex w-6 items-center justify-center rounded border'
            >
              <PlusIcon size={15} />
            </button>
          </div>
          <p className='font-semibold'>{count * product.price} ৳</p>
        </div>
      </div>
    </div>
  );
}
