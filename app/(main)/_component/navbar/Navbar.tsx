'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/shared/Logo';
import { Container } from '@/components/shared/Container';
import { usePathname, useRouter } from 'next/navigation';
import { NavLink } from './NavLink';
import { navLinks } from './navLinks.data';
import { Button } from '@/components/ui/button';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { Cart } from './cart/Cart';
import { ClientOnly } from '@/components/shared/ClientOnly';
import { useAppDispatch, useAppSelector } from '@/redux/redux.hook';
import Link from 'next/link';
import { removeUser } from '@/redux/features/user.slice';
import { LogoutAction } from '@/action/logout.action';
import { toast } from 'sonner';

export function Navbar() {
  const pathName = usePathname();
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(removeUser());
    LogoutAction();
    toast.success('Logged out');
  };

  return (
    <nav className='sticky top-0 z-10 border-b border-gray-300 bg-white py-5'>
      <Container className='flex items-center justify-between'>
        <Logo />

        {/* links */}
        <div className='flex items-center justify-end gap-6'>
          <div className='hidden items-center gap-6 lg:flex'>
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} currentPath={pathName} />
            ))}
          </div>

          <ClientOnly>
            <Cart />
          </ClientOnly>

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
                    <SheetClose key={link.href} asChild>
                      <NavLink
                        className='w-fit'
                        {...link}
                        currentPath={pathName}
                      />
                    </SheetClose>
                  ))}

                  {user ? (
                    <Button onClick={handleLogout}>Logout</Button>
                  ) : (
                    <Link className='w-full' href={'/login'}>
                      <Button className='w-full'>Login</Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {user ? (
            <Button onClick={handleLogout} className='hidden lg:block'>
              Logout
            </Button>
          ) : (
            <Link className='hidden lg:block' href={'/login'}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </Container>
    </nav>
  );
}
