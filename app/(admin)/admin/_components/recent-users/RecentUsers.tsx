'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/redux.hook';

export function RecentUsers() {
  const { customers } = useAppSelector((state) => state.customers);

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>New Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-3 rounded-full bg-slate-100 px-8 py-2 text-center font-semibold'>
          <div className='text-left'>Name</div>
          <div>Phone</div>
          <div className='text-right'>Status</div>
        </div>
        {customers.slice(0, 5).map(({ phone, name, userStatus }) => (
          <div
            key={phone}
            className={cn(
              'grid grid-cols-3 items-center border-b py-3 text-center',
            )}
          >
            <div className='pl-8 text-left'>{name}</div>
            <div>{phone}</div>
            <div className='pr-8 text-right font-semibold uppercase'>
              {userStatus}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
