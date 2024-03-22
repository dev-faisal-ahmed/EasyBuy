import Link from 'next/link';

type NavLinkProps = {
  title: string;
  href: string;
  currentPath: string;
};
export function NavLink({ title, href, currentPath }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`px-1 font-medium ${href === currentPath ? 'border-b border-black' : ''}`}
    >
      {title}
    </Link>
  );
}
