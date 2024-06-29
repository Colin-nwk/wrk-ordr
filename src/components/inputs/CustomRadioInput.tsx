// import React from 'react'

// const CustomRadioInput = () => {
//     return (
//         <div>CustomRadioInput</div>
//     )
// }

// export default CustomRadioInput


import React from 'react';
import { useController, Control } from 'react-hook-form';
import { RadioGroup } from '@headlessui/react'
import { ImRadioChecked2 } from "react-icons/im";
import clsx from 'clsx';

type RadioOption = {
    name: string;
    id: string;
    description?: string;
}

type CustomRadioGroupProps = {
    name: string;
    label: string;
    control: Control<any>;
    rules?: { required: boolean };
    options: RadioOption[];
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
    label,
    name,
    control,
    rules,
    options
}) => {
    const {
        field: { onChange, value },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <div className='w-full mt-4'>
            <RadioGroup
                value={value}
                onChange={onChange}
                className="space-y-2"
            >
                <RadioLabel className="text-base font-semibold capitalize text-[#333333]">{label}</RadioLabel>
                {options.map((option) => (
                    <RadioGroup.Option
                        key={option.id}
                        value={option}
                        className={({ active, checked }) =>
                            clsx(
                                'group relative flex cursor-pointer rounded-lg py-4 px-5 text-secondary transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-primary border',
                                checked && 'data-[checked]:bg-primary/5',
                                active && 'ring-2 ring-primary ring-offset-2'
                            )
                        }
                    >
                        {({ checked }) => (
                            <div className="flex items-center justify-between w-full">
                                <div className="text-sm/6">
                                    <RadioGroup.Label as="p" className="font-semibold text-secondary">
                                        {option.name}
                                    </RadioGroup.Label>
                                    {option.description && (
                                        <RadioGroup.Description as="div" className="flex gap-2 text-white/50">
                                            <p className="text-sm/6">{option.description}</p>
                                        </RadioGroup.Description>
                                    )}
                                </div>
                                <ImRadioChecked2 className={clsx(
                                    "size-6 fill-primary transition",
                                    checked ? 'opacity-100' : 'opacity-5'
                                )} />
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
            {error && (
                <p className="mt-1 text-red-500 text-sm/6">{error.message}</p>
            )}
        </div>
    );
};

export default CustomRadioGroup;