import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi"
import { GiPlainCircle } from "react-icons/gi"
import clsx from 'clsx'

interface DateRange {
    start: Date
    end: Date
    label: string
}

interface DateRangeFilterProps {
    options: DateRange[]
    label: string
    onChange?: (selectedRange: DateRange) => void
}


const FilterDateRange = ({ options, label, onChange }: DateRangeFilterProps) => {
    const [selected, setSelected] = useState<DateRange>(options[0])

    const handleChange = (value: DateRange) => {
        setSelected(value)
        if (onChange) {
            onChange(value)
        }
    }

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    }

    return (
        <Listbox value={selected} onChange={handleChange}>
            <ListboxButton
                className={clsx(
                    'relative w-64 rounded-lg py-1.5 pr-8 pl-3 truncate text-black text-left text-sm/6 bg-white border hover:text-primary',
                    'focus:outline-none data-[focus]:outline-none'
                )}
            >
                <span className="capitalize">{label}: </span>
                <span className="font-semibold">{selected.label}</span>
                <FiChevronDown
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-secondary"
                    aria-hidden="true"
                />
            </ListboxButton>
            <ListboxOptions
                anchor="bottom"
                transition
                className={clsx(
                    'w-[var(--button-width)] rounded-xl border bg-white shadow-lg p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
            >
                {options.map((option) => (
                    <ListboxOption
                        key={option.label}
                        value={option}
                        className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none"
                    >
                        <GiPlainCircle className="invisible size-3 fill-primary group-data-[selected]:visible" />
                        <div className="text-secondary text-sm/6">
                            {option.label}: {formatDate(option.start)} - {formatDate(option.end)}
                        </div>
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}

export default FilterDateRange