'use client';

import { SheetTrigger, Sheet, SheetContent } from '@/components/ui/sheet';
import { ProductType } from '@/lib/types/data.types';
import { FilterProducts } from './FilterProducts';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { ProductCard } from '@/components/shared/product-card/ProductCard';
import { Menu as MenuIcon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/redux.hook';
import { updateProducts } from '@/redux/features/product.slice';

type AllProductsProps = {
  allProducts: ProductType[];
};

export function AllProducts({ allProducts }: AllProductsProps) {
  const { products, isFiltered } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateProducts(allProducts));
  }, [allProducts, dispatch]);

  return (
    <section className='my-6 flex gap-6'>
      {/* show this filter on large device */}
      <FilterProducts className='hidden lg:block' />
      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='flex h-fit items-center gap-3 rounded-lg bg-white p-2 lg:col-span-2'>
          {/* show this filter on small device */}
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger className='cursor-pointer' asChild>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side={'left'}>
                <FilterProducts />
              </SheetContent>
            </Sheet>
          </div>

          <h1 className='pl-2 text-base font-semibold'>Products</h1>

          <Button
            onClick={() => dispatch({ type: 'RESET_FILTER' })}
            disabled={!isFiltered}
            size={'sm'}
            className='ml-auto'
          >
            Reset Filter
          </Button>
        </div>

        {/* all products */}
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
