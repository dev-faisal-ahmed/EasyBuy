import { products } from '@/lib/data/products.data';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
  return NextResponse.json(products);
}
