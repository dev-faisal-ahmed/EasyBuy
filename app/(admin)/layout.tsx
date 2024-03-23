import { WrapperType } from '@/lib/types/props.types';
import { Sidebar } from './_components/sidebar/Sidebar';
import { Topbar } from './_components/topbar/Topbar';
import { AutGuard } from './_components/AuthGuard';

export default function AdminLayout({ children }: WrapperType) {
  return (
    <AutGuard>
      <section className='grid grid-cols-[auto_1fr]'>
        <div>
          <Sidebar />
        </div>
        <section>
          <Topbar />
          <main>{children}</main>
        </section>
      </section>
    </AutGuard>
  );
}
