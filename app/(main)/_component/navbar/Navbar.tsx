'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Container } from '@/components/ui/Container';
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import { navLinks } from '../../(home)/data/navLinks';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const pathName = usePathname();
  return (
    <nav className='border-b border-gray-300 py-5'>
      <Container className='flex items-center justify-between'>
        <Logo />

        {/* links */}
        <div className='flex items-center justify-end gap-6'>
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} currentPath={pathName} />
          ))}

          <Link href={'/cart'}>
            <ShoppingCartIcon />
          </Link>

          <Link href={'/login'}>
            <Button>Login</Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
