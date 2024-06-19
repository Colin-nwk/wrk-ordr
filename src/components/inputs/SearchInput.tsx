import { Input } from '@headlessui/react'
import { SearchIcon } from "../icons/SearchIcon"

const SearchInput = () => {
    return (
        <>
            <label className="flex relative items-center ml-auto mr-4 justify-stretch w-20 lg:w-1/4 xl:w-1/3 rounded-lg border-[1px] border-secondary/20 bg-secondary/5 py-2.5 px-3.5 text-base text-secondary focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 cursor-pointer" htmlFor='search'>

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