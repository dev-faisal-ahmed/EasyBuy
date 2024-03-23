import { Container } from '@/components/shared/Container';
import { MoveRight as MoveRightIcon } from 'lucide-react';
import { contactUsTexts, getHelpTexts, socialIcons } from './footers.data';
import { cn } from '@/lib/utils';

type FooterType = { className?: string };

export function Footer({ className }: FooterType) {
  return (
    <footer className={cn('bg-black py-16 text-white', className)}>
      <Container className='flex flex-col justify-between gap-12 text-center lg:flex-row lg:text-left'>
        {/* info */}
        <div className='mx-auto w-full max-w-[250px] lg:mx-0 lg:max-w-fit'>
          <h1 className='mb-5 text-2xl font-semibold'>Stay Connected</h1>
          <div className='flex items-center border-b border-white pb-2'>
            <input
              className='mx-auto w-full bg-transparent outline-none placeholder:text-gray-300'
              type='text'
              placeholder='Enter Your Email Address'
            />
            <MoveRightIcon size={18} />
          </div>
          <div className='mt-8 space-y-1'>
            <p>Home : 10, Road : 5, Block : A, Mirpur Dhaka Bangladesh</p>
            <p>Cell : 01900-000-000</p>
            <p>Email : john.doe@gmail.com</p>
          </div>
        </div>
        {/* links */}
        <div>
          <h3 className='text-lg font-semibold'>Contact Us</h3>
          <div className='mt-5 space-y-2'>
            {contactUsTexts.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-lg font-semibold'>Get Help</h3>
          <div className='mt-5 space-y-2'>
            {getHelpTexts.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-lg font-semibold'>Follow Us</h3>
          <div className='mt-5 flex items-center justify-center gap-3'>
            {socialIcons.map((icon) => (
              <span className='text-xl' key={icon.key}>
                {icon}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
