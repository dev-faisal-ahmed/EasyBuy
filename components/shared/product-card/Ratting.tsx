import { arrayMaker } from '@/utils/helper';
import { cn } from '@/lib/utils';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

export type RattingProps = {
  ratting: number;
  maxRatting?: number;
  className?: string;
};

export function Ratting({ ratting, maxRatting = 5, className }: RattingProps) {
  /*
  logic : 
  full star = 3.5 => 3
  half star = 4 - 3 => 1
  empty star = 5 - 4 => 1
*/

  const fullStar = arrayMaker(Math.floor(ratting));
  const halfStar = arrayMaker(Math.ceil(ratting) - Math.floor(ratting));
  const emptyStar = arrayMaker(maxRatting - Math.ceil(ratting));

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {fullStar.map((number) => (
        <FaStar key={`full-star-${number}`} className='text-primary' />
      ))}
      {halfStar && <FaStarHalfAlt className='text-primary' />}
      {emptyStar.map((number) => (
        <FaRegStar key={`full-star-${number}`} className='text-primary' />
      ))}
    </div>
  );
}
