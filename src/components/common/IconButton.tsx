import React, { useMemo } from 'react';

type IconButtonSize = 'sm' | 'md';
type IconButtonVariant = 'normal' | 'warning';
interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  children: React.ReactNode;
}

const IconButton = ({ size = 'md', variant = 'normal', children, ...rest }: IconButtonProps) => {
  const className = useMemo(() => {
    const sizeNumber = { sm: 8, md: 10 }[size];
    const bgValue = { normal: 'teal', warning: 'rose' }[variant];

    const sizeClasses = [`h-${sizeNumber}`, `w-${sizeNumber}`];
    const bgClasses = [`bg-${bgValue}-300`, `hover:bg-${bgValue}-600`];
    const restClasses = ['rounded-md', 'p-2', 'text-center', 'disabled:bg-slate-600'];

    return [...sizeClasses, ...bgClasses, ...restClasses].join(' ');
  }, [size, variant]);
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
