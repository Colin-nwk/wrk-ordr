import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import Heading from '../ui/Heading'

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
                            <DialogPanel className="w-2/3 p-5 space-y-2 overflow-y-auto bg-white rounded-md max-h-[25rem]">
                                <div className="flex items-center space-x-4"> <div className="bg-green-400 rounded-full size-5"></div>
                                    <Heading size="lg" className="w-full line-clamp-1">
                                        Job Title
                                    </Heading>

                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}

export default Modal




