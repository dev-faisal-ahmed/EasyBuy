import { WrapperType } from '@/lib/types/props.types';
import { Navbar } from './_component/navbar/Navbar';
import { Footer } from './_component/footer/Footer';

export default function MainLayout({ children }: WrapperType) {
  return (
    <section className='relative flex min-h-screen flex-col'>
      <Navbar />
      {children}
      <Footer className='mt-auto' />
    </section>
  );
}
