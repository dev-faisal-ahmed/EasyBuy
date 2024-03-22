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
import { logionFieldData } from './lib/loginFiled.data';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { USER } from '@/lib/data/sampleUser.data';
import { getDataFromLocal, setDataToLocal } from '@/utils/localStorage.helper';
import { LocalStorageKeys } from '@/lib/data/localStorageKeys.data';
import { UserType } from '@/lib/types/data.types';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type LoginFieldsType = {
  email: string;
  password: string;
};

type LoginFieldsNameType = 'email' | 'password';

export default function LoginPage() {
  const { register, handleSubmit, reset } = useForm<LoginFieldsType>({
    defaultValues: { email: USER.email, password: USER.password },
  });

  const router = useRouter();

  const handleLogin = (data: LoginFieldsType) => {
    // getting all users from local storage and merging them with default user
    const users = getDataFromLocal<UserType[]>(LocalStorageKeys.USERS) || [];
    users.push(USER);

    // checking if any user matches from localData
    try {
      const [user] = users.filter((user) => user.email === data.email);
      if (!user) throw new Error('User not found');
      if (user.password !== data.password) throw new Error('Wrong password');

      // setting info to the local
      setDataToLocal(LocalStorageKeys.USER, user);
      toast.success('Successfully logged in!!');

      reset();
      router.push('/');
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error('Something Went Wrong');
    }
  };

  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-slate-100'>
      <Card className='w-full max-w-[350px] border-none bg-transparent shadow-none sm:border sm:bg-card sm:shadow-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Welcome Again!</CardTitle>
          <CardDescription>Input your information to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className='flex flex-col gap-3'
          >
            {logionFieldData.map(({ name, label, placeholder, type }) => (
              <div className='space-y-2' key={name}>
                <Label htmlFor={name}>{label}</Label>
                <Input
                  id={name}
                  placeholder={placeholder}
                  type={type}
                  {...register(name as LoginFieldsNameType)}
                />
              </div>
            ))}
            <Button className='mt-5'>Login</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
