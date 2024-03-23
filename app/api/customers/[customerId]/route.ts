import { customers } from '@/lib/data/customers.data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { customerId: string } },
) {
  const { customerId } = params;
  const [customer] = customers.filter(
    (customer) => customer.customerId === customerId,
  );

  return NextResponse.json(customer || null);
}
