import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { WrapperType } from '@/lib/types/props.types';
import { Toaster } from 'sonner';
import { AppProvider } from '@/context/AppContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EasyBuy',
  description: 'Best Place To Buy Anything',
};

export default function RootLayout({ children }: WrapperType) {
  return (
    <html lang='en'>
      <body
        className={cn(
          inter.className,
          'min-h-screen overflow-y-auto bg-slate-100 text-sm antialiased',
        )}
      >
        <AppProvider>
          {children}
          <Toaster duration={1000} richColors />
        </AppProvider>
      </body>
    </html>
  );
}
