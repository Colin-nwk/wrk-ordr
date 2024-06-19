
import { Input } from '@headlessui/react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { CiBellOn } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
const Topbar = () => {
    const location = useLocation();
    const currentPath = location.pathname as string;
    return (
        <><nav className="flex items-center justify-between px-4 py-6 bg-white shadow-md">
            <div className="flex items-center">
                <h1 className="ml-2 text-xl font-medium capitalize">{currentPath === '/' ? 'Dashboard' : currentPath.slice(1)}</h1>
            </div>

            <Input
                className={clsx(
                    'ml-auto mr-4 block w-1/4 rounded-lg border-[1px] border-secondary/30 bg-secondary/5 py-2.5 px-3.5 text-base text-secondary',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'

                )}
                placeholder="Search"
            />

            <div className="flex items-center justify-center space-x-2">
                <CiBellOn className='text-secondary size-6' />
                <img
                    src="https://via.placeholder.com/32"
                    alt="Profile Picture"
                    className="rounded-full"
                />
                <span className="mr-2 text-sm">Welcome, John Doe</span>
            </div>
        </nav></>
    )
}

export default Topbar