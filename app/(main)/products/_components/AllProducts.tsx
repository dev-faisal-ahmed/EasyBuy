'use client';

import { SheetTrigger, Sheet, SheetContent } from '@/components/ui/sheet';
import { ProductType } from '@/lib/types/data.types';
import { PriceFilter } from './PriceFilter';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';
import { useEffect } from 'react';
import { ProductCard } from '@/components/shared/product-card/ProductCard';
import { Menu as MenuIcon } from 'lucide-react';

type AllProductsProps = {
  allProducts: ProductType[];
};

export function AllProducts({ allProducts }: AllProductsProps) {
  const { state, dispatch } = useAppContext();
  const { isFiltered, products } = state;

  useEffect(() => {
    dispatch({ type: 'UPDATE_PRODUCTS', payload: allProducts });
  }, [allProducts, dispatch]);

  return (
    <section className='my-6 flex gap-6'>
      <PriceFilter className='hidden lg:block' />
      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='flex h-fit items-center gap-3 rounded-lg bg-white p-2 lg:col-span-2'>
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger className='cursor-pointer' asChild>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side={'left'}>
                <PriceFilter />
              </SheetContent>
            </Sheet>
          </div>
          <h1 className='pl-2 text-base font-semibold'>Products</h1>

          <Button disabled={isFiltered} size={'sm'} className='ml-auto'>
            Reset Filter
          </Button>
        </div>
        <>
          {products.length ? (
            <>
              {products.map((product) => (
                <ProductCard key={product.productId} {...product} />
              ))}
            </>
          ) : (
            <p className='col-span-2 text-center text-lg font-semibold'>
              No Products Found
            </p>
          )}
        </>
      </div>
    </section>
  );
}
