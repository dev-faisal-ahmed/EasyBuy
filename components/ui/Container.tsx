import { WrapperType } from '@/lib/types/props.types';
import { cn } from '@/lib/utils';

type ContainerProps = WrapperType & {
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <section className={cn('mx-auto max-w-[1200px] px-5', className)}>
      {children}
    </section>
  );
}
