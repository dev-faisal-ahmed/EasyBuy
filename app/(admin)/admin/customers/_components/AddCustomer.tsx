'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { customerFormField } from './customer.form.data';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useState } from 'react';
import { isValidNumber } from '@/utils/validation.helper';
import { toast } from 'sonner';
import { useAppDispatch } from '@/redux/redux.hook';
import { addCustomer } from '@/redux/features/customer.slice';
import { DialogTitle } from '@radix-ui/react-dialog';

export function AddCustomer() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleAddCustomer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement & {
      name: { value: string };
      phone: { value: string };
      address: { value: string };
    };

    const phone = form.phone.value;
    const name = form.name.value.trim();
    const address = form.address.value.trim();

    if (!isValidNumber(phone)) return toast.error('Invalid Phone');

    dispatch(
      addCustomer({
        address,
        name,
        phone,
        purchase: { total: 0, totalSpent: 0 },
        userStatus: 'member',
      }),
    );

    toast.success('Customer Successfully Added');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='ml-auto block rounded bg-gray-800 hover:bg-black'>
          Add Customer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-base font-semibold'>
            Add New Customer
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddCustomer} className='flex flex-col gap-3'>
          {customerFormField.map(
            ({ name, title, placeholder, type, textArea }) => (
              <div className='space-y-1 text-lg' key={name}>
                <Label className='font-semibold' htmlFor={name}>
                  {title}
                </Label>
                {textArea && (
                  <Textarea placeholder={placeholder} name={name} required />
                )}
                {!textArea && (
                  <Input
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    required
                  />
                )}
              </div>
            ),
          )}
          <Button className='mt-5'>Add Customer</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
