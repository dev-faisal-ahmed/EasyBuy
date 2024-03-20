import { WrapperType } from '@/lib/types/props.types';
import { cn } from '@/lib/utils';

type ContainerProps = WrapperType & {
  className?: string;
  style?: Record<string, any>;
};

export function Container({ children, className, style }: ContainerProps) {
  return (
    <section
      style={style}
      className={cn('mx-auto max-w-[1200px] px-5', className)}
    >
      {children}
    </section>
  );
}
