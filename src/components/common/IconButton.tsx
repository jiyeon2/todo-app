import React from 'react';

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
  const sizeNumber = { sm: 8, md: 10 }[size];
  const bgColor = { normal: 'teal', warning: 'rose' }[variant];
  return (
    <button
      className={`h-${sizeNumber} w-${sizeNumber} rounded-md bg-${bgColor}-300 p-2 text-center hover:bg-${bgColor}-600 disabled:bg-slate-600`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
