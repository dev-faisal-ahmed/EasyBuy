import { cn } from '@/lib/utils';
import { SidebarLinkType } from '@/lib/types/data.types';
import Link from 'next/link';

type SidebarLinkProps = SidebarLinkType & {
  activeUrl: string;
};

export function SidebarLink({
  title,
  href,
  icon,
  activeUrl,
}: SidebarLinkProps) {
  return (
    <Link
      className={cn(
        `flex items-center gap-3 rounded py-2 pl-3 pr-16 text-sm transition-colors duration-300 hover:bg-gray-400 hover:text-white`,
        activeUrl === href ? 'bg-primary text-white' : null,
      )}
      href={href}
    >
      {icon}
      {title}
    </Link>
  );
}
