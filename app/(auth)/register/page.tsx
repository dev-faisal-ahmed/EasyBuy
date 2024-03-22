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
import { useForm } from 'react-hook-form';
import { USER } from '@/lib/data/sampleUser.data';
import { getDataFromLocal, setDataToLocal } from '@/utils/localStorage.helper';
import { LocalStorageKeys } from '@/lib/data/localStorageKeys.data';
import { UserType } from '@/lib/types/data.types';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { registerFieldData } from './lib/registerField.data';
import Link from 'next/link';

type RegisterFieldsType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginFieldsNameType = 'name' | 'email' | 'password' | 'confirmPassword';

export default function RegisterPage() {
  const { register, handleSubmit, reset } = useForm<RegisterFieldsType>();

  const router = useRouter();

  const handleLogin = (data: RegisterFieldsType) => {
    // getting all users from local storage and merging them with default user
    const users = getDataFromLocal<UserType[]>(LocalStorageKeys.USERS) || [];
    const usersWithDefaultUser = [USER, ...users];

    try {
      // checking if user already exist
      const [user] = usersWithDefaultUser.filter(
        (user) => user.email === data.email,
      );

      if (user) throw new Error('User already Exist');

      // checking if password matches with confirmPassword
      if (data.password !== data.confirmPassword)
        throw new Error('Password and Confirm Password does not match');

      // adding new user to the collections
      users.push({
        name: data.name.trim(),
        email: data.email.trim(),
        password: data.password,
      });

      // setting info to the local
      setDataToLocal(LocalStorageKeys.USERS, users);
      toast.success('Account Created!');

      reset();
      router.push('/login');
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error('Something Went Wrong');
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
            onSubmit={handleSubmit(handleLogin)}
            className='flex flex-col gap-3'
          >
            {registerFieldData.map(({ name, label, placeholder, type }) => (
              <div className='space-y-2' key={name}>
                <Label htmlFor={name}>{label}</Label>
                <Input
                  id={name}
                  placeholder={placeholder}
                  type={type}
                  {...register(name as LoginFieldsNameType)}
                  required
                />
              </div>
            ))}
            <CardDescription className='text-center'>
              Already have an account?{' '}
              <Link className='text-blue-500 underline' href={'/login'}>
                Login
              </Link>
            </CardDescription>
            <Button className='mt-5'>Register</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
