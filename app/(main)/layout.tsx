import { WrapperType } from '@/lib/types/props.types';
import { Navbar } from './_component/navbar/Navbar';
import { Footer } from './_component/footer/Footer';

export default function MainLayout({ children }: WrapperType) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
