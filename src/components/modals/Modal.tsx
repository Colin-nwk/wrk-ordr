import { Dialog, DialogPanel, Transition, TransitionChild, Popover, PopoverButton, PopoverPanel, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Heading from '../ui/Heading'
import { HiDotsVertical } from "react-icons/hi";
import clsx from 'clsx'
import { Fragment } from 'react'

const Modal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) => {
    return (
        <>
            <Transition appear show={isOpen}>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/20 " aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center w-screen p-4 ">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-11/12 lg:w-5/6 2xl:w-2/3 p-5  overflow-y-auto bg-white rounded-xl max-h-[25rem]">
                                <div className="flex justify-between">
                                    <div className="flex space-x-2 ">
                                        <span className="bg-[#68D391] rounded-full size-5 mt-1"></span>
                                        <div className="flex flex-col mb-1 ">
                                            <Heading size="lg" className="w-full leading-tight">
                                                Job Title
                                            </Heading>
                                            <p className='capitalize'>Job location</p>
                                        </div>
                                    </div>
                                    <Popover className="relative">
                                        <PopoverButton className="data-[hover]:text-white data-[focus]:outline-1 outline-none data-[focus]:outline-white"><HiDotsVertical className='text-tertiary size-6' /></PopoverButton>
                                        <Transition
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >

                                            <PopoverPanel anchor="bottom end" className="flex flex-col items-start justify-start px-2 py-3 bg-white rounded-lg shadow-lg text-secondary">
                                                <span className='w-full p-1 px-2 font-medium text-left transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-secondary/5'>Edit Job</span>
                                                <span className='w-full p-1 px-2 font-medium text-left capitalize transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-secondary/5'>Create sub Job</span>
                                                <span className='w-full p-1 px-2 font-medium text-left capitalize transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-secondary/5'>create complaint</span>
                                                <span className='w-full p-1 px-2 font-medium text-left capitalize transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-secondary/5'>delete</span>

                                            </PopoverPanel>
                                        </Transition>
                                    </Popover>
                                </div>
                                {/* top */}
                                {/* tab navigation  */}
                                <TabGroup className="w-full mt-4">
                                    <TabList className="grid w-full grid-cols-5 px-1 py-0.5 rounded-lg gap-x-1 bg-secondary/20 text-[#333333]">
                                        <Tab as={Fragment}>
                                            {({ hover, selected }) => (
                                                <button className={clsx(hover && 'bg-white', selected && 'bg-white', 'px-4 py-2 rounded-lg font-semibold capitalize duration-300 ease-out transition-all w-full')}>Info</button>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ hover, selected }) => (
                                                <button className={clsx(hover && 'bg-white', selected && 'bg-white', 'px-4 py-2 rounded-lg font-semibold capitalize duration-300 ease-out transition-all w-full')}>appointments</button>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ hover, selected }) => (
                                                <button className={clsx(hover && 'bg-white', selected && 'bg-white', 'px-4 py-2 rounded-lg font-semibold capitalize duration-300 ease-out transition-all w-full')}>files</button>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ hover, selected }) => (
                                                <button className={clsx(hover && 'bg-white', selected && 'bg-white', 'px-4 py-2 rounded-lg font-semibold capitalize duration-300 ease-out transition-all w-full')}>documentation</button>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ hover, selected }) => (
                                                <button className={clsx(hover && 'bg-white', selected && 'bg-white', 'px-4 py-2 rounded-lg font-semibold capitalize duration-300 ease-out transition-all w-full')}>Account</button>
                                            )}
                                        </Tab>

                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>Content 1</TabPanel>
                                        <TabPanel>Content 2</TabPanel>
                                        <TabPanel>Content 3</TabPanel>
                                        <TabPanel>Content 4</TabPanel>
                                        <TabPanel>Content 5</TabPanel>
                                    </TabPanels>
                                </TabGroup>

                                {/* end tab navigation  */}
                            </DialogPanel>
                        </TransitionChild>
                    </div >
                </Dialog >
            </Transition >
        </>

    )
}

export default Modal




