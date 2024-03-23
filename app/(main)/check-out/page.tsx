'use client';

import { Container } from '@/components/shared/Container';
import { ClientOnly } from '@/components/shared/ClientOnly';

import { CartRelatedInfo } from './_components/CartRelatedInfo';
import { PaymentInfo } from './_components/PaymentInfo';

export default function CheckOutPage() {
  return (
    <Container className='my-6 flex flex-col gap-6 lg:flex-row'>
      <ClientOnly>
        <CartRelatedInfo />
        <PaymentInfo />
      </ClientOnly>
    </Container>
  );
}
