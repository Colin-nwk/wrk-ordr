

import { useLocation } from 'react-router-dom';
import { Bell } from "../icons/Bell"
import { ProfileModalContent } from "../index"

import { useModal, ModalType, ModalSize } from "../../context/ModalContext"


import SearchInput from '../inputs/SearchInput';
import { avatar } from "../../assets/index"
const Topbar = () => {
    const { showModal } = useModal();
    const location = useLocation();
    const currentPath = location.pathname as string;
    return (
        <><nav className="fixed z-50 flex items-center justify-between w-full px-4 py-6 bg-white shadow-md">
            <div className="flex items-center">
                <div className="w-64 "></div>
                <h1 className="ml-2 text-xl font-medium capitalize">{currentPath === '/' ? 'Dashboard' : currentPath.slice(1)}</h1>
            </div>

            <SearchInput className='w-20 ml-auto mr-4 lg:w-1/4 xl:w-1/3' />

            <div className="flex items-center justify-center space-x-2">
                <Bell className='text-primary size-6' />
                <span className='flex items-center cursor-pointer' onClick={() => showModal(ModalType.PROFILE, {
                    content: <ProfileModalContent />,
                    size: ModalSize.MEDIUM
                })}>
                    <img
                        src={avatar}
                        alt="Profile Picture"
                        className="rounded-full cursor-pointer"

                    />
                    <span className="ml-2 text-sm font-bold text-gray-900 truncate ">John Doe</span>
                </span>
            </div>
        </nav></>
    )
}

export default Topbar