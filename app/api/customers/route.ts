import { NextResponse } from 'next/server';
import { customers } from '@/lib/data/customers.data';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(customers);
}
