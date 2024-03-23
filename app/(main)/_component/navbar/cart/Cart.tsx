import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAppSelector } from '@/redux/redux.hook';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { CartItem } from './CartItem';

export function Cart() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className='relative cursor-pointer'>
          <ShoppingCartIcon size={22} />
          <span className='absolute -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-primary text-white'>
            {cart.length}
          </span>
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Cart</SheetTitle>
        <div className='mt-5 flex flex-col gap-3'>
          {cart.map((item) => (
            <CartItem key={item.product.productId} {...item} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
