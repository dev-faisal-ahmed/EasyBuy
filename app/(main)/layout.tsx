import { WrapperType } from '@/lib/types/props.types';
import { Navbar } from './(home)/_components/navbar/Navbar';

export default function MainLayout({ children }: WrapperType) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
