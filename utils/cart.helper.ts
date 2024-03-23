import { CartType } from '@/lib/types/data.types';

export function cartCount(cart: CartType[], productId: string) {
  const [data] = cart.filter((item) => item.product.productId === productId);
  if (!data) return 0;
  return data.count;
}
