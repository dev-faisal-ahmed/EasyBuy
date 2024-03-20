import { WrapperType } from '@/lib/types/props.types';
import { Navbar } from './(home)/_components/Navbar';

export default function MainLayout({ children }: WrapperType) {
  return (
    <>
      <Navbar />
    </>
  );
}
