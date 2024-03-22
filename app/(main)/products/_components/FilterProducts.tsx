'use client';

import ReactSlider from 'react-slider';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/redux/redux.hook';
import { filterProducts } from '@/redux/features/product.slice';

type PriceFilterProps = { className?: string };

const min = 0;
const max = 99999;

export function FilterProducts({ className }: PriceFilterProps) {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [range, setRange] = useState([min, max]);
  const dispatch = useAppDispatch();

  function updateMin(e: ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);

    if (minRef.current && val > range[1]) {
      minRef.current.value = range[0].toString();
      return;
    }

    setRange([val, range[1]]);
  }

  function updateMax(e: ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);
    if (maxRef.current && val < range[0]) {
      maxRef.current.value = range[1].toString();
      return;
    }

    setRange([range[0], val]);
  }

  function handleFiltering(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      keyWord: { value: string };
    };

    dispatch(
      filterProducts({
        min: range[0],
        max: range[1],
        keyWord: formData.keyWord.value.trim(),
      }),
    );

    formData.reset();
    setRange([min, max]);
  }

  return (
    <div
      className={cn(
        'sticky top-24 h-full w-full max-w-[320px] rounded-md bg-white p-4',
        className,
      )}
    >
      <form onSubmit={handleFiltering}>
        <Label
          htmlFor='search'
          className='mb-3 block border-b border-gray-300 pb-1 font-bold uppercase'
        >
          Search KeyWord
        </Label>
        <Input
          ref={searchRef}
          type='text'
          id='search'
          className=''
          placeholder='Search...'
          name='keyWord'
        />
        <Label
          htmlFor='search'
          className='my-5 block border-b border-gray-300 pb-1 font-bold uppercase'
        >
          Price
        </Label>
        <ReactSlider
          className='slider'
          min={0}
          max={99999}
          value={range}
          onChange={setRange}
        />
        <div className='mt-5 flex items-center justify-between gap-5'>
          <Input
            ref={minRef}
            onChange={updateMin}
            type='number'
            value={range[0]}
          />
          <Input
            ref={maxRef}
            onChange={updateMax}
            type='number'
            value={range[1]}
          />
        </div>
        <Button className='mt-6 w-full'>Apply</Button>
      </form>
    </div>
  );
}
