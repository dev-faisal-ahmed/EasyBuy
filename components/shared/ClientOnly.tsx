'use client';
import { WrapperType } from '@/lib/types/props.types';
import { useEffect, useState } from 'react';

export function ClientOnly({ children }: WrapperType) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : null;
}
