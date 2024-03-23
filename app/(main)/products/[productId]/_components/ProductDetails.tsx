'use client';

import { ProductType } from '@/lib/types/data.types';
import { GoHomeFill } from 'react-icons/go';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Ratting } from '@/components/shared/product-card/Ratting';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaCartShopping, FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/redux/redux.hook';
import { cartCount } from '@/utils/cart.helper';
import { addToCartAndReplaceCount } from '@/redux/features/cart.slice';
import Link from 'next/link';
import Image from 'next/image';

export function ProductDetails(product: ProductType) {
  const { name, image, price, review, discount, description, productId } =
    product;
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const [counter, setCounter] = useState(cartCount(cart, productId));

  useEffect(() => {
    setCounter(cartCount(cart, productId));
  }, [cart, productId]);

  return (
    <>
      <div className='mb-3 flex items-center gap-2'>
        <Link href={'/'}>
          <GoHomeFill />
        </Link>{' '}
        / Product / {name}
      </div>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div>
          <Image
            className='w-full rounded-lg object-cover object-center'
            src={image}
            width={350}
            height={250}
            alt={name}
          />
        </div>
        <div>
          <h1 className='mb-1 text-2xl font-semibold'>{name}</h1>
          <div className='mt-3 flex flex-wrap gap-3'>
            <RoundedContainer>
              Regular Price : {new Intl.NumberFormat().format(price)} ৳
            </RoundedContainer>
            {discount && (
              <RoundedContainer>
                Discounted Price :{' '}
                {new Intl.NumberFormat().format(
                  price - (price * discount) / 100,
                )}
              </RoundedContainer>
            )}
            <RoundedContainer>In Stock</RoundedContainer>
            {review && (
              <RoundedContainer>
                Total Review : {review.reviewCount}
              </RoundedContainer>
            )}
          </div>
          <h3 className='mt-8 text-lg font-semibold'>Description</h3>
          <p className='text-justify text-gray-700'>{description}</p>

          {review && (
            <div className='mt-8 flex items-center gap-2'>
              <Ratting ratting={review.rating} />
              <span>({review.reviewCount})</span>
            </div>
          )}
          <div className='mt-5 flex flex-col gap-8 lg:flex-row'>
            <div className='flex items-center gap-4'>
              <Button
                onClick={() => setCounter((prev) => prev + 1)}
                variant={'outline'}
              >
                <FaPlus />
              </Button>
              <Input
                className='text-center'
                type='number'
                value={counter}
                onChange={(e) => setCounter(Number(e.target.value))}
              />
              <Button
                onClick={() => setCounter((prev) => prev - 1)}
                variant={'outline'}
              >
                <FaMinus />
              </Button>
            </div>
            <Button
              onClick={() =>
                dispatch(addToCartAndReplaceCount({ count: counter, product }))
              }
              className='flex items-center gap-2'
            >
              <FaCartShopping /> Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function RoundedContainer({ children }: { children: ReactNode }) {
  return (
    <p className='w-fit rounded-full bg-gray-200 px-5 py-1 font-medium'>
      {children}
    </p>
  );
}
