

import { useLocation } from 'react-router-dom';
import { Bell } from "../icons/Bell"

import SearchInput from '../inputs/SearchInput';
import { avatar } from "../../assets/index"
const Topbar = () => {
    const location = useLocation();
    const currentPath = location.pathname as string;
    return (
        <><nav className="fixed z-50 flex items-center justify-between w-full px-4 py-6 bg-white shadow-md">
            <div className="flex items-center">
                <div className="w-64 "></div>
                <h1 className="ml-2 text-xl font-medium capitalize">{currentPath === '/' ? 'Dashboard' : currentPath.slice(1)}</h1>
            </div>

            <SearchInput />

            <div className="flex items-center justify-center space-x-2">
                <Bell className='text-primary size-6' />
                <img
                    src={avatar}
                    alt="Profile Picture"
                    className="rounded-full"
                />
                <span className="mr-2 text-sm font-semibold truncate ">John Doe</span>
            </div>
        </nav></>
    )
}

export default Topbar