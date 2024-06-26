import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Banner() {
  return (
    <Container className='mt-8 w-full'>
      <div
        className='flex min-h-[500px] flex-col justify-center rounded-md bg-cover bg-no-repeat px-8 text-center text-white lg:px-32 lg:text-left'
        style={{ backgroundImage: `url(/images/banner.webp)` }}
      >
        <h3 className='text-2xl font-semibold lg:text-4xl'>Short Edition</h3>
        <h2 className='mb-3 mt-1 text-3xl font-medium lg:text-5xl'>
          Red Special Edition
        </h2>
        <p className='mb-12 text-base lg:text-lg'>
          Wireless Connection With TV, Computer, Laptop
        </p>
        <Link href={'/products'}>
          <Button className='bg-black hover:bg-gray-900'>Buy Products</Button>
        </Link>
      </div>
    </Container>
  );
}
