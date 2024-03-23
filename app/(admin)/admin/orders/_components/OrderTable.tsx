'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { orders } from '@/lib/data/order.data';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function OrdersTable() {
  const tableHeadClass = `bg-slate-100 text-center font-semibold uppercase whitespace-nowrap`;

  const router = useRouter();

  return (
    <div className='mb-5 rounded-md bg-white p-5 shadow'>
      <Table className='w-full'>
        <TableHeader>
          <TableRow className='border-none'>
            <TableHead
              className={cn(tableHeadClass, 'rounded-s-full text-left')}
            >
              Order Id
            </TableHead>
            <TableHead className={cn(tableHeadClass, 'text-left')}>
              User
            </TableHead>
            <TableHead className={cn(tableHeadClass)}>Price</TableHead>
            <TableHead className={cn(tableHeadClass, 'rounded-e-full')}>
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(({ orderId, name, price, status }) => (
            <TableRow
              onClick={() => router.push(`customers/${orderId}`)}
              className='cursor-pointer border-0'
              key={orderId}
            >
              <TableCell>{orderId}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell className='text-center'>{price}</TableCell>
              <TableCell className='text-center'>
                <span
                  className={cn(
                    `rounded  px-3 py-1 text-xs`,
                    status === 'pending' ? 'bg-orange-100 text-orange-500' : '',
                    status === 'delivered' ? 'bg-green-100 text-green-500' : '',
                    status === 'cancelled' ? 'bg-red-100 text-red-500' : '',
                  )}
                >
                  {status}
                </span>
              </TableCell>

              {/* <TableCell className='flex items-center gap-5'>
                  <div>
                    <div className='flex size-8 items-center justify-center  rounded-full bg-gray-500 text-white'>
                      {name[0]}
                    </div>
                  </div>
                  <p className='whitespace-nowrap'>{name}</p>
                </TableCell>
                <TableCell>{}</TableCell>
                <TableCell className={`text-center `}>
                  <span
                    className={`rounded  px-3 py-1 font-semibold uppercase`}
                  >
                    {userStatus}
                  </span>
                </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
