import Link from 'next/link';

export function Logo() {
  return (
    <Link href={'/'} className='text-xl font-semibold'>
      EasyBuy
    </Link>
  );
}
