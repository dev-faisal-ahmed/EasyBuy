import { Card } from '@/components/ui/card';
import { Chart } from './_components/charts/Chart';
import { RecentUsers } from './_components/recent-users/RecentUsers';
import { Summary } from './_components/summary/Summary';

export default function AdminPage() {
  return (
    <section className='px-5'>
      <Summary />
      <div className='mt-8 flex flex-col gap-8 lg:flex-row'>
        <Card className='h-[350px] w-full rounded-md bg-white p-8'>
          <Chart />
        </Card>
        <RecentUsers />
      </div>
    </section>
  );
}
