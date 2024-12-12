import { cn } from '../lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};
const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full md:max-w-screen-xl',
        className
      )}
      {...props}
    />
  );
};

export default Container;
