import React from 'react';
import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';
import { Description, Field, Input, Label } from '@headlessui/react'

type CustomInputProps = {
    name: string;
    label: string;
    control: Control<any>;
    rules?: { required: boolean };
    type?: string;
    placeholder?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, control, rules, type, variant = 'primary', ...props }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    const hasValue = value !== undefined && value !== null && value !== '';

    const baseStyles = ' rounded-lg py-2 pl-8 px-3 w-full focus:outline-none data-[focus]:outline data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 mt-1 block';
    const styles = {
        primary: 'border border-tertiary/20 text-secondary bg-[#F5F5F8]',
        secondary: 'border-secondary bg-yellow-100',
        tertiary: 'border-tertiary bg-green-100',
        hasValue: 'border-green-500 bg-primary/10',
    };

    const inputClassName = clsx(baseStyles, styles[variant], {
        [styles.hasValue]: hasValue,
    });

    return (
        <>
            <Field className="mb-2">
                <Label className="text-base font-semibold capitalize text-[#333333]">{label}</Label>

                <div className='relative'>
                    <span className='absolute inset-0 -translate-y-1/2 '>Icon</span>
                    <Input
                        type={type} name={name} onChange={onChange} onBlur={onBlur} value={value || ''} ref={ref}  {...props}
                        className={inputClassName}
                    />
                </div>

                {error &&
                    <Description className="text-red-500 text-sm/6 line-clamp-1">{error.message}</Description>
                }
            </Field>
        </>
    );
};

export default CustomInput;

