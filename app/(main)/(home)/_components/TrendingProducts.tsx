import { ProductCard } from '@/components/shared/product-card/ProductCard';
import { Container } from '@/components/ui/Container';
import { products } from '@/lib/data/products.data';

export function TrendingProducts() {
  return (
    <Container className='my-12'>
      <h1 className='text-xl font-semibold'>Trending Products</h1>
      <div className='my-5 grid gap-6 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.productId} {...product} />
        ))}
      </div>
    </Container>
  );
}
