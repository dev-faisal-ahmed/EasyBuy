'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CustomerType } from '@/lib/types/data.types';
import { cn } from '@/lib/utils';
import { updateCustomers } from '@/redux/features/customer.slice';
import { useAppDispatch, useAppSelector } from '@/redux/redux.hook';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type CustomerTableProps = { allCustomers: CustomerType[] };

export function CustomerTable({ allCustomers }: CustomerTableProps) {
  const { customers } = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const tableHeadClass = `bg-slate-100 text-center font-semibold uppercase whitespace-nowrap`;

  useEffect(() => {
    dispatch(updateCustomers(allCustomers));
  }, [allCustomers, dispatch]);

  return (
    <div className='my-5 rounded-md bg-white p-5 shadow'>
      {customers && customers.length ? (
        <Table className='w-full'>
          <TableHeader>
            <TableRow className='border-none'>
             
              <TableHead
                className={cn(tableHeadClass, 'rounded-s-full text-left')}
              >
                User Info
              </TableHead>
              <TableHead className={cn(tableHeadClass, 'text-left')}>
                Phone Number
              </TableHead>
              <TableHead className={cn(tableHeadClass, 'rounded-e-full')}>
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map(({ name, phone, userStatus }) => (
              <TableRow
                onClick={() => router.push(`customers/${phone}`)}
                className='cursor-pointer border-0'
                key={phone}
              >
                <TableCell className='flex items-center gap-5'>
                  <div>
                    <div className='flex size-8 items-center justify-center  rounded-full bg-gray-500 text-white'>
                      {name[0]}
                    </div>
                  </div>
                  <p className='whitespace-nowrap'>{name}</p>
                </TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell className={`text-center `}>
                  <span
                    className={`rounded  px-3 py-1 font-semibold uppercase`}
                  >
                    {userStatus}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className='mt-5 text-center font-semibold'>No Customer Found</p>
      )}
    </div>
  );
}
