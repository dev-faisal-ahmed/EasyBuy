'use client';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';
import { SidebarLink } from './SidebarLink';
import { sidebarLinks } from './sidebarLinks.data';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut as LogOutIcon } from 'lucide-react';
import { useAppDispatch } from '@/redux/redux.hook';
import { removeUser } from '@/redux/features/user.slice';

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  return (
    <aside
      className={cn(
        'flex h-screen flex-col justify-between bg-white p-3',
        className,
      )}
    >
      <Logo />
      <div className='mt-6 flex flex-col gap-2'>
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.href} {...link} activeUrl={pathname} />
        ))}
      </div>
      <Button
        onClick={() => dispatch(removeUser())}
        className='mt-auto flex items-center gap-2 rounded bg-destructive'
      >
        <LogOutIcon /> <span>Log Out</span>
      </Button>
    </aside>
  );
}
