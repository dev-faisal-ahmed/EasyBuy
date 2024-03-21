'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Container } from '@/components/ui/Container';
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import { navLinks } from './navLinks.data';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CgMenuLeftAlt } from 'react-icons/cg';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  const pathName = usePathname();
  return (
    <nav className='sticky top-0 border-b border-gray-300 bg-white py-5'>
      <Container className='flex items-center justify-between'>
        <Logo />

        {/* links */}
        <div className='flex items-center justify-end gap-6'>
          <div className='hidden items-center gap-6 lg:flex'>
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} currentPath={pathName} />
            ))}
          </div>
          <Link href={'/cart'}>
            <ShoppingCartIcon size={22} />
          </Link>

          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <span className='cursor-pointer text-2xl'>
                  <CgMenuLeftAlt />
                </span>
              </SheetTrigger>
              <SheetContent>
                <div className='mt-5 flex flex-col gap-3'>
                  {navLinks.map((link) => (
                    <SheetClose key={link.href}>
                      <NavLink {...link} currentPath={pathName} />
                    </SheetClose>
                  ))}

                  <Link href={'/login'}>
                    <Button className='mt-3 w-full'>Login</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link className='hidden lg:block' href={'/login'}>
            <Button>Login</Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
