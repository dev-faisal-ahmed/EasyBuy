'use client';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { FaCreditCard } from 'react-icons/fa';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import { useAppDispatch } from '@/redux/redux.hook';
import { emptyCart } from '@/redux/features/cart.slice';

export function PaymentInfo() {
  const router = useRouter();

  const [value, setValue] = useState<string>();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    console.log(value);
    if (value && value?.length < 4)
      return toast.error('Pleas input your card number first');

    toast.success('Order Places successfully');
    dispatch(emptyCart());
    setValue('');
    router.push('/');
  };

  return (
    <div className='w-full'>
      <h2 className='mb-3 mt-5 text-xl font-bold'>Payment</h2>
      <div className='mx-auto w-full rounded-lg border-card bg-white p-8 shadow-sm'>
        <Label className='flex items-center gap-3'>
          <span className='text-2xl'>
            <FaCreditCard />
          </span>
          <span className='text-base font-semibold'>
            Input Your Payment Info
          </span>
        </Label>
        <Label className='mb-3 mt-5 block font-semibold'>Card Number</Label>
        <div className='mx-auto w-fit'>
          <InputOTP
            value={value}
            onChange={(val) => setValue(val)}
            maxLength={4}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button onClick={handleClick} size={'sm'} className='mt-8 w-full'>
          Confirm Order
        </Button>
      </div>
    </div>
  );
}
