import React, { ButtonHTMLAttributes, FC } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'transparent' | 'white';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    label?: string;
    icon?: FC<React.ComponentProps<'svg'>>;
}

const CustomButton: FC<ButtonProps> = ({
    label,
    children,
    className,
    type = 'button',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon: Icon,
    ...props
}) => {
    const baseStyles = 'rounded-md text-sm transition-all h-fit flex items-center justify-center gap-x-1 capitalize duration-300 ease-in font-medium disabled:cursor-not-allowed';
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/80 active:bg-primary/90',
        secondary: 'bg-gray-600 text-white hover:bg-secondary/80 active:bg-secondary/90',
        danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
        transparent: 'font-semibold bg-transparent text-black/90 border hover:text-primary active:text-primary/90',
        white: 'font-semibold bg-white text-black border hover:text-primary active:text-primary/90'
    };
    const sizes = {
        sm: 'py-1 px-2 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-5 text-lg',
    };

    const classes = clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && 'opacity-50 cursor-not-allowed',
        className
    );

    return (
        <HeadlessButton
            type={type}
            className={classes}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="loader" />
            ) : (
                <>
                    {Icon && <Icon className="mr-2" />}
                    {children}
                </>
            )}
            {label}
        </HeadlessButton>
    );
};

export default CustomButton;
