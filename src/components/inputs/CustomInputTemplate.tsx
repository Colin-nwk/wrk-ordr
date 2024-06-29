import React, { useState } from 'react';
import { useController, Control } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import clsx from 'clsx';

interface CustomInputProps {
    name: string;
    label: string;
    control: Control<any>;
    rules?: { required: boolean };
    type?: string;
    options?: string[];
    placeholder?: string;
    inputStyle?: 'primary' | 'secondary' | 'tertiary';
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, control, rules, type, options, inputStyle = 'primary', ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    const hasValue = value !== undefined && value !== null && value !== '';

    const baseStyles = 'border rounded p-2';
    const styles = {
        primary: 'border-primary bg-blue-100',
        secondary: 'border-secondary bg-yellow-100',
        tertiary: 'border-tertiary bg-green-100',
        hasValue: 'border-green-500 bg-tertiary/20',
    };

    const inputClassName = clsx(baseStyles, styles[inputStyle], {
        [styles.hasValue]: hasValue,
    });

    const handleTogglePassword = () => setShowPassword(!showPassword);

    let inputElement;

    switch (type) {
        case 'select':
            inputElement = (
                <select name={name} onChange={onChange} onBlur={onBlur} value={value || ''} ref={ref} className={inputClassName} {...props}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );
            break;
        case 'textarea':
            inputElement = <textarea name={name} onChange={onChange} onBlur={onBlur} value={value || ''} ref={ref} className={inputClassName} {...props} />;
            break;
        case 'checkbox':
            inputElement = <input type="checkbox" name={name} onChange={onChange} onBlur={onBlur} checked={!!value} ref={ref} className={inputClassName} {...props} />;
            break;
        case 'radio':
            inputElement = options?.map((option) => (
                <label key={option} className="mr-2">
                    <input type="radio" name={name} onChange={onChange} onBlur={onBlur} value={option} checked={value === option} ref={ref} className={inputClassName} {...props} />
                    {option}
                </label>
            ));
            break;
        case 'password':
            inputElement = (
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value || ''}
                        ref={ref}
                        className={clsx(inputClassName, 'pr-10')}
                        {...props}
                    />
                    <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            );
            break;
        default:
            inputElement = <input type={type} name={name} onChange={onChange} onBlur={onBlur} value={value || ''} ref={ref} className={inputClassName} {...props} />;
    }

    return (
        <div className="mb-4">
            <label className="w-full rounded-lg">
                <span className='font-medium'>
                    {label}
                </span>
                {inputElement}
            </label>
            {error && <span className="text-red-500">{error.message}</span>}
        </div>
    );
};

export default CustomInput;