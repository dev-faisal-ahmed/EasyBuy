import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavLinkProps = {
  title: string;
  href: string;
  currentPath: string;
  className?: string;
};
export function NavLink({ title, href, currentPath, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        `px-1 font-medium ${href === currentPath ? 'border-b border-black' : ''}`,
        className,
      )}
    >
      {title}
    </Link>
  );
}
