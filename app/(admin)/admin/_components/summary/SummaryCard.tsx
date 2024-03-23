import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleArrowOutUpRight, Ellipsis } from 'lucide-react';

type SummaryCardProps = {
  title: string;
  count: number;
  color: string;
  percentage: string;
  money?: boolean;
};

export function SummaryCard({
  title,
  color,
  count,
  percentage,
  money,
}: SummaryCardProps) {
  const size = '60px';
  const innerSize = '50px';
  return (
    <Card className='border-none bg-slate-100 shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between pb-1'>
        <CardTitle className='text-lg'>{title}</CardTitle>
        <Ellipsis />
      </CardHeader>
      <CardContent className='flex'>
        <div className='w-full'>
          <h1 className='text-4xl font-bold'>
            {count} {money && <span>৳</span>}{' '}
          </h1>
          <div
            style={{ color }}
            className='mt-2 flex items-center gap-2 whitespace-nowrap'
          >
            <CircleArrowOutUpRight size={10} /> +{percentage} Inc
          </div>
        </div>
        <div className='w-fit'>
          <div
            style={{ color, backgroundColor: color, height: size, width: size }}
            className='flex  items-center justify-center rounded-full'
          >
            <div
              style={{ height: innerSize, width: innerSize }}
              className='flex size-16 items-center justify-center rounded-full bg-white'
            >
              <p>{percentage}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
