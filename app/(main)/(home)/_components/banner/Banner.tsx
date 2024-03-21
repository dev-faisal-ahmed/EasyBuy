import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Banner() {
  return (
    <Container className='mt-8'>
      <div
        className='flex min-h-[500px] flex-col justify-center rounded-md bg-cover bg-no-repeat px-32 text-white'
        style={{ backgroundImage: `url(/images/banner.webp)` }}
      >
        <h3 className='text-4xl font-semibold'>Short Edition</h3>
        <h2 className='mb-3 mt-1 text-5xl font-medium'>Red Special Edition</h2>
        <p className='mb-12 text-lg'>
          Wireless Connection With TV, Computer, Laptop
        </p>
        <Link href={'/products'}>
          <Button className='bg-black hover:bg-gray-900'>Buy Products</Button>
        </Link>
      </div>
    </Container>
  );
}
