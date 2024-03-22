import { products } from '@/lib/data/products.data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { productId: string } },
) {
  const { productId } = params;
  const [product] = products.filter(
    (product) => product.productId === productId,
  );
  return NextResponse.json(product);
}
