'use client';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { orange } from 'tailwindcss/colors';
import { sellData } from './cart.data';

export function Chart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={sellData}>
        <Bar radius={[20, 20, 20, 20]} dataKey='sell' fill={orange[600]} />
        <Cell />
        <XAxis
          dataKey={'month'}
          axisLine={false}
          tickLine={false}
          stroke='#888888'
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `৳${value}`}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
