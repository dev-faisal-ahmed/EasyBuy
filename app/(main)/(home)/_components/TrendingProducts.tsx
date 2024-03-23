import { ProductCard } from '@/components/shared/product-card/ProductCard';
import { Container } from '@/components/shared/Container';
import { products } from '@/lib/data/products.data';
import Link from 'next/link';

export function TrendingProducts() {
  return (
    <Container className='my-12'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Trending Products</h1>
        <Link
          className='cursor-pointer font-semibold text-blue-500'
          href={'/products'}
        >
          See All
        </Link>
      </div>
      <div className='my-5 grid gap-6 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.productId} {...product} />
        ))}
      </div>
    </Container>
  );
}
