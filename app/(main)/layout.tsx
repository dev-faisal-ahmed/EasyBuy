import { WrapperType } from '@/lib/types/props.types';
import { Navbar } from './_component/navbar/Navbar';

export default function MainLayout({ children }: WrapperType) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
