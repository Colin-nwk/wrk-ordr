import React from 'react';
import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';
import { Description, Field, Label, Checkbox } from '@headlessui/react'
import { FaCheckCircle } from "react-icons/fa";

type CustomCheckboxProps = {
    name: string;
    label: string;
    control: Control<any>;
    rules?: { required: boolean };
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    label,
    name,
    control,
    rules,
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

    const baseStyles = 'group size-6 rounded-md p-1 ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-offset-2';
    const styles = {
        primary: 'bg-white/10 ring-white/15 data-[checked]:bg-primary',
        secondary: 'bg-yellow-100 ring-yellow-200 data-[checked]:bg-yellow-500',
        tertiary: 'bg-green-100 ring-green-200 data-[checked]:bg-green-500',
    };

    const checkboxClassName = clsx(baseStyles, styles[variant]);

    return (
        <Field className="mb-2">
            <div className="flex items-center">
                <Checkbox
                    checked={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    className={checkboxClassName}
                >
                    <FaCheckCircle className="hidden size-4 fill-white group-data-[checked]:block" />
                </Checkbox>
                <Label className="ml-2 text-base font-semibold capitalize text-[#333333]">{label}</Label>
            </div>

            {error && (
                <Description className="mt-1 text-red-500 text-sm/6 line-clamp-1">{error.message}</Description>
            )}
        </Field>
    );
};

export default CustomCheckbox;