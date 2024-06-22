import { Input } from '@headlessui/react'
import { SearchIcon } from "../icons/SearchIcon"
import clsx from "clsx"

const SearchInput = ({ className }: { className?: string }) => {
    return (
        <>
            <label className={clsx(className, 'flex relative items-center justify-stretch w-full rounded-lg border-[1px] border-secondary/20 bg-secondary/5 py-2.5 px-3.5 text-base text-secondary focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 cursor-pointer')} htmlFor='search'>

                <SearchIcon className='mr-2' />
                <Input
                    className="w-full h-full bg-transparent outline-none focus:outline-none ring-0"
                    placeholder="Search"
                    name='search' id="search"
                />
            </label>
        </>
    )
}

export default SearchInput