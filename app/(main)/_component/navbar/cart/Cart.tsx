'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAppSelector } from '@/redux/redux.hook';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { CartItem } from './CartItem';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Cart() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className='relative cursor-pointer'>
          <ShoppingCartIcon size={22} />
          {cart.length && (
            <span className='absolute -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-primary text-white'>
              {cart.length}
            </span>
          )}
        </span>
      </SheetTrigger>
      <SheetContent className='flex min-h-screen flex-col justify-between'>
        <SheetTitle>Cart</SheetTitle>
        <div className='mt-5 flex h-full flex-col gap-3'>
          {cart.map((item) => (
            <CartItem key={item.product.productId} {...item} />
          ))}
        </div>
        <SheetClose asChild>
          <Link href={'/check-out'}>
            <Button className='block w-full'>Check Out</Button>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
