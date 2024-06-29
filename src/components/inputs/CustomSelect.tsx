import React from 'react';
import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';
import { Description, Field, Label, Select } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa';

type CustomSelectProps = {
    name: string;
    label: string;
    control: Control<any>;
    rules?: { required: boolean };
    options: string[];
    placeholder?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    name,
    control,
    rules,
    options,
    placeholder = 'Select an option',
    variant = 'primary'
}) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    const hasValue = value !== undefined && value !== null && value !== '';

    const baseStyles = 'rounded-lg py-2 pl-8 pr-10 w-full focus:outline-none data-[focus]:outline data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 mt-1 block appearance-none';
    const styles = {
        primary: 'border border-tertiary/20 text-secondary bg-[#F5F5F8]',
        secondary: 'border-secondary bg-yellow-100',
        tertiary: 'border-tertiary bg-green-100',
        hasValue: 'border-green-500 bg-primary/10',
    };

    const selectClassName = clsx(baseStyles, styles[variant], {
        [styles.hasValue]: hasValue,
    });

    return (
        <Field className="mb-2">
            <Label className="text-base font-semibold capitalize text-[#333333]">{label}</Label>

            <div className='relative'>
                <Select
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    className={selectClassName}
                >
                    <option>{placeholder}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
                <span className='absolute -translate-y-1/2 pointer-events-none right-2 top-1/2'>
                    <FaChevronDown className="text-gray-400" />
                </span>
            </div>

            {error && (
                <Description className="text-red-500 text-sm/6 line-clamp-1">{error.message}</Description>
            )}
        </Field>
    );
};

export default CustomSelect;