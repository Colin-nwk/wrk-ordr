

import React from 'react'
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react"
import { HiDotsVertical, HiDotsHorizontal } from "react-icons/hi"



type DropdownItem = {
    title: string;
    onClick: () => void;

}

type DropdownProps = {
    items: DropdownItem[];
    isVertical?: boolean;
    icon?: React.ReactNode;
}

//NOTE: icon={<HiDotsHorizontal className='text-tertiary size-6' />}

const Dropdown: React.FC<DropdownProps> = ({ items, isVertical = true, icon }) => {
    return (
        <Popover className="relative">
            <PopoverButton className="data-[hover]:text-white data-[focus]:outline-1 outline-none data-[focus]:outline-white">
                {isVertical ? (
                    <HiDotsVertical className='text-tertiary size-6' />
                ) : (
                    <HiDotsHorizontal className='text-tertiary size-6' />
                )}
            </PopoverButton>
            <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel anchor="bottom end" className="flex flex-col items-start justify-start px-2 py-3 bg-white rounded-lg shadow-lg text-secondary">
                    {items.map((item, index) => (
                        <span className='flex items-center justify-between w-full p-1 px-2 font-medium text-left capitalize transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-secondary/5' key={index} onClick={item.onClick}>
                            <span>
                                {item.title}
                            </span>
                            {icon}
                        </span>
                    ))}
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}

export default Dropdown