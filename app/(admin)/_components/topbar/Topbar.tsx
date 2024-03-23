'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Sidebar } from '../sidebar/Sidebar';
import { GoHomeFill } from 'react-icons/go';
import { usePathname } from 'next/navigation';
import { generateTitle } from '@/utils/link.helper';
import { useAppSelector } from '@/redux/redux.hook';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { ClientOnly } from '@/components/shared/ClientOnly';

export function Topbar() {
  const pathName = usePathname();
  const { user } = useAppSelector((state) => state.user);
  return (
    <nav className='flex h-fit items-center justify-between p-6'>
      <div className='flex items-center gap-2 font-semibold'>
        <Link href={'/admin'} className='text-lg'>
          <GoHomeFill />
        </Link>
        <span>/ {generateTitle(pathName)}</span>
      </div>
      <div className='block md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className='cursor-pointer' />
          </SheetTrigger>
          <SheetContent side={'left'}>
            <Sidebar className='border-none' />
          </SheetContent>
        </Sheet>
      </div>
      <ClientOnly>
        {user && (
          <Avatar>
            <AvatarFallback className='border bg-primary text-xl font-bold text-white'>
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
        )}
      </ClientOnly>
    </nav>
  );
}
