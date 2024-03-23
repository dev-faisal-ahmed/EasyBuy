import { customers } from '@/lib/data/customers.data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { phone: string } },
) {
  const { phone } = params;
  const [customer] = customers.filter((customer) => customer.phone === phone);

  return NextResponse.json(customer || null);
}
