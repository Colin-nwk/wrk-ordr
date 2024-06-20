import { HTMLAttributes, FC } from 'react';
import clsx from 'clsx';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const Heading: FC<HeadingProps> = ({
    children,
    className,
    variant = 'h2',
    size = 'lg',
    ...props
}) => {
    const baseStyles = 'font-bold text-[#333333]';
    const variants = {
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
    };
    const sizes = {
        sm: 'text-sm',
        md: 'text-[20px]',
        lg: 'text-[24px]',
        xl: 'text-[30px]'
    };

    const classes = clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    const HeadingElement = variant;

    return (
        <HeadingElement className={classes} {...props}>
            {children}
        </HeadingElement>
    );
};

export default Heading;