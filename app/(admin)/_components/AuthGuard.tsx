'use client';

import { WrapperType } from '@/lib/types/props.types';
import { useAppSelector } from '@/redux/redux.hook';
import { redirect } from 'next/navigation';

export function AutGuard({ children }: WrapperType) {
  const { user } = useAppSelector((state) => state.user);

  console.log(user);

  if (!user) redirect('/login');
  // useLayoutEffect(() => {
  //   console.log(user);
  // }, [user]);

  return children;
}
