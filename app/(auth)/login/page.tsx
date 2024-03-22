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
import { logionFieldData } from './loginFiled.data';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { LoginAction } from './login.action';
import { isValidNumber } from '@/utils/validation.helper';
import { toast } from 'sonner';
import { ServerResponseType } from '@/lib/types/data.types';
import { LocalStorageKeys, setDataToLocal } from '@/utils/localStorage.helper';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginAction = async (fromData: FormData) => {
    const toastId = toast.loading('Logging In...');
    try {
      setIsLoading(true);
      const phone = fromData.get('phone');

      if (!isValidNumber(phone as string))
        throw new Error('Invalid Phone Number');

      const response: ServerResponseType<{ token: string }> =
        await LoginAction(fromData);

      if (!response.ok) throw new Error(response.message);

      setDataToLocal(LocalStorageKeys.USER, response?.data?.token);
      toast.success(response.message);
      router.push('/');
      router.refresh();
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error(JSON.stringify(err));
    } finally {
      toast.dismiss(toastId);
      setIsLoading(true);
    }
  };

  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-slate-100'>
      <Card className='w-full max-w-[350px] border-none bg-transparent shadow-none sm:border sm:bg-card sm:shadow-sm'>
        <CardHeader>
          <CardTitle className='mb-1 text-2xl'>Welcome Again!</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            action={handleLoginAction}
            className='flex flex-col gap-3'
          >
            {logionFieldData.map(({ name, label, placeholder, type }) => (
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
            <CardDescription className='text-center'>
              Don&apos;t have any account?{' '}
              <Link className='text-blue-500 underline' href={'/register'}>
                Register
              </Link>
            </CardDescription>
            <Button disabled={isLoading} className='mt-5'>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
