'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { registerFieldData } from './registerField.data';
import { RegisterAction } from './register.action';
import { useRef, useState } from 'react';
import { ServerResponseType } from '@/lib/types/data.types';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { isValidNumber } from '@/utils/validation.helper';
import Link from 'next/link';

export default function RegisterPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterAction = async (formData: FormData) => {
    const toastId = toast.loading('Creating User...');
    try {
      setIsLoading(true);
      // validating user's number
      const phone = formData.get('phone');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');

      if (!isValidNumber(phone as string)) throw new Error('Invalid Number');
      if (password !== confirmPassword)
        throw new Error('Confirm Password and Password does not match');

      const response: ServerResponseType = await RegisterAction(formData);

      if (!response.ok) throw new Error(response.message);
      toast.success(response.message, { id: toastId });
      router.push('/');

      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Error) toast.error(err.message, { id: toastId });
      else toast.error(JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-slate-100'>
      <Card className='w-full max-w-[350px] border-none bg-transparent shadow-none sm:border sm:bg-card sm:shadow-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Hi! There!</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            action={handleRegisterAction}
            className='flex flex-col gap-3'
          >
            {registerFieldData.map(({ name, label, placeholder, type }) => (
              <div className='space-y-2' key={name}>
                <Label htmlFor={name}>{label}</Label>
                <Input
                  id={name}
                  placeholder={placeholder}
                  type={type}
                  name={name}
                  required
                />
              </div>
            ))}

            <CardDescription className='mt-2 text-center'>
              Already have an account?{' '}
              <Link className='text-blue-500 underline' href={'/login'}>
                Login
              </Link>
            </CardDescription>
            <Button disabled={isLoading} className='mt-5'>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
