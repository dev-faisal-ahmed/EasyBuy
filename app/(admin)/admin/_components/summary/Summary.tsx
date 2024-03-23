import { SummaryCard } from './SummaryCard';
import { blue, green, orange } from 'tailwindcss/colors';

export function Summary() {
  return (
    <div className='grid gap-8 rounded-md bg-white p-8 lg:grid-cols-3'>
      <SummaryCard
        title='Total Sales'
        count={250326}
        color={green[600]}
        percentage='59%'
        money
      />
      <SummaryCard
        title='Total Orders'
        count={7855}
        color={blue[600]}
        percentage='32%'
      />

      <SummaryCard
        title='Total Users'
        count={521}
        color={orange[600]}
        percentage='26%'
      />
    </div>
  );
}
