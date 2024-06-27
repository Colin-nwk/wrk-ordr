// import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
// import { FiChevronDown } from "react-icons/fi";
// import { GiPlainCircle } from "react-icons/gi";
// import clsx from 'clsx'
// import { useState } from 'react'


// const people = [
//     { id: 1, name: 'Tom Cook' },
//     { id: 2, name: 'Wade Cooper' },
//     { id: 3, name: 'Tanya Fox' },
//     { id: 4, name: 'Arlene Mccoy' },
//     { id: 5, name: 'Devon Webb' },
// ]

// const FilterSelect = () => {

//     const [selected, setSelected] = useState(people[0])



//     return (
//         <>
//             <Listbox value={selected} onChange={setSelected}>
//                 <ListboxButton
//                     className={clsx(
//                         'relative w-44 rounded-lg  py-1.5 pr-8 pl-3 truncate text-black text-left text-sm/6 bg-white border hover:text-primary ',
//                         'focus:outline-none data-[focus]:outline-none  '
//                     )}
//                 >
//                     <span className="capitalize">people : </span> <span className="font-semibold">{selected.name}</span>
//                     <FiChevronDown
//                         className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-secondary"
//                         aria-hidden="true"
//                     />
//                 </ListboxButton>
//                 <ListboxOptions
//                     anchor="bottom"
//                     transition
//                     className={clsx(
//                         'w-[var(--button-width)] rounded-xl border bg-white shadow-lg p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
//                         'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
//                     )}
//                 >
//                     {people.map((person) => (
//                         <ListboxOption
//                             key={person.name}
//                             value={person}
//                             className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none  "
//                         >
//                             <GiPlainCircle className="invisible size-3 fill-primary group-data-[selected]:visible" />
//                             <div className="text-secondary text-sm/6">{person.name}</div>
//                         </ListboxOption>
//                     ))}
//                 </ListboxOptions>
//             </Listbox>
//         </>
//     )
// }

// export default FilterSelect



import React, { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { GiPlainCircle } from "react-icons/gi"
import { IoIosArrowDown } from "react-icons/io";
import clsx from 'clsx'

type Option = {
    [key: string]: any
}

interface FilterSelectProps<T extends Option | string> {
    options: T[]
    label: string
    keyExtractor?: (item: T) => React.Key
    displayExtractor?: (item: T) => string
    onChange?: (selectedItem: T) => void
    value: T
}

function FilterSelect<T extends Option | string>({
    options,
    label,
    keyExtractor,
    displayExtractor,
    onChange,
    value
}: FilterSelectProps<T>) {
    const [selected, setSelected] = useState<T>(options[0])

    const getKey = (item: T): React.Key => {
        if (keyExtractor) return keyExtractor(item)
        return typeof item === 'object' ? item.id || JSON.stringify(item) : item
    }

    const getDisplayValue = (item: T): string => {
        if (displayExtractor) return displayExtractor(item)
        return typeof item === 'object' ? item.name || JSON.stringify(item) : item.toString()
    }

    const handleChange = (value: T) => {
        setSelected(value)
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <Listbox value={selected} onChange={handleChange}>
            <ListboxButton
                className={clsx(
                    'relative w-fit rounded-lg py-1.5 pr-8 pl-3 truncate text-black text-left text-sm/6 bg-white border hover:text-primary',
                    'focus:outline-none data-[focus]:outline-none'
                )}
            >
                <span className="capitalize">{label}: </span>
                <span className="font-semibold">{getDisplayValue(value)}</span>
                <IoIosArrowDown
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-secondary"
                    aria-hidden="true"
                />
            </ListboxButton>
            <ListboxOptions
                anchor="bottom"
                // transition
                className={clsx(
                    'w-[var(--button-width)] rounded-xl border bg-white shadow-lg p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
            >
                {options.map((option) => (
                    <ListboxOption
                        key={getKey(option)}
                        value={option}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-lg cursor-pointer select-none group"
                    >
                        <GiPlainCircle className="invisible size-3 fill-primary group-data-[selected]:visible" />
                        <div className="text-secondary text-sm/6">{getDisplayValue(option)}</div>
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}

export default FilterSelect