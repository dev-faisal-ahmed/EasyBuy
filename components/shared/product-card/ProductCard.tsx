'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { ProductType } from '@/lib/types/data.types';
import { Button } from '../../ui/button';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { Ratting } from './Ratting';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { useAppDispatch } from '@/redux/redux.hook';
import { addToCart } from '@/redux/features/cart.slice';

export function ProductCard(product: ProductType) {
  const { name, image, description, discount, price, review, productId } =
    product;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ count: 1, product }));
    toast.success(`${name} added to the cart`);
  };

  return (
    <Card className='overflow-hidden'>
      <Image
        style={{ height: '200px', width: '100%' }}
        className='object-cover object-center'
        src={image}
        height={250}
        width={350}
        alt={name}
      />
      <CardHeader>
        <CardTitle className='text-center text-xl'>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-3 text-justify text-xs'>{description}</p>
        <h3 className='mt-4 flex items-center gap-3'>
          <span className='text-xl font-semibold text-primary'>
            ৳ {discount ? price - (price * discount) / 100 : price}
          </span>
          <span className='text-gray-500 line-through'>{price}</span>
        </h3>
        {review && <Ratting className='mt-3' ratting={review.rating} />}
      </CardContent>
      <CardFooter className='flex items-center gap-3'>
        <Button
          onClick={handleAddToCart}
          className='flex w-full items-center gap-2'
        >
          <ShoppingCartIcon />
          Add To Cart
        </Button>
        <Link className='w-full' href={`/products/${productId}`}>
          <Button className='w-full' variant={'outline'}>
            View Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
