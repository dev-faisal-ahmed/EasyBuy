'use client';

import { WrapperType } from '@/lib/types/props.types';
import { useAppSelector } from '@/redux/redux.hook';
import { redirect, useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export function AutGuard({ children }: WrapperType) {
  const { user } = useAppSelector((state) => state.user);

  useLayoutEffect(() => {
    if (!user) redirect('/login');
  }, [user]);

  return children;
}
