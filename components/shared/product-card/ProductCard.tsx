import Image from 'next/image';
import { ProductType } from '@/lib/types/data.types';
import { Button } from '../../ui/button';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Ratting } from './Ratting';

export function ProductCard({
  name,
  image,
  description,
  discount,
  price,
  review,
}: ProductType) {
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
        <Button className='flex w-full items-center gap-2'>
          <ShoppingCartIcon />
          Add To Cart
        </Button>
        <Button className='w-full' variant={'outline'}>
          View Detail
        </Button>
      </CardFooter>
    </Card>
  );
}
