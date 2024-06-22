import React, { ButtonHTMLAttributes, FC } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: FC<React.ComponentProps<'svg'>>;
}

const CustomButton: FC<ButtonProps> = ({
    children,
    className,
    type = 'button',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon: Icon,
    ...props
}) => {
    const baseStyles = 'rounded py-2 px-4 text-sm transition-all';
    const variants = {
        primary: 'bg-sky-600 text-white hover:bg-sky-500 active:bg-sky-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-700',
        danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
    };
    const sizes = {
        sm: 'py-1 px-3 text-xs',
        md: 'py-2 px-4 text-sm',
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
        </HeadlessButton>
    );
};

export default CustomButton;
