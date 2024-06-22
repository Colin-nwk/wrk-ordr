import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

const CustomTab = ({ title }: { title: string }) => {
    return (
        <Tab as={Fragment}>
            {({ hover, selected }) => (
                <button className={clsx(hover && 'bg-white', selected && 'bg-white w-full', 'px-4 py-2 rounded-lg font-semibold capitalize duration-300 ease-out transition-all w-full')}>{title}</button>
            )}
        </Tab>
    )
}

export default CustomTab