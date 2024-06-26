import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { ModalContent, ModalSize } from '../../context/ModalContext';

const ReusableModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    content: ModalContent | null;
}> = ({ isOpen, onClose, content }) => {
    return (
        <Transition appear show={isOpen}>
            <Dialog open={isOpen} onClose={onClose} className="relative z-50">
                <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center w-screen px-4">
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 transform-[scale(95%)]"
                        enterTo="opacity-100 transform-[scale(100%)]"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 transform-[scale(100%)]"
                        leaveTo="opacity-0 transform-[scale(95%)]"
                    >
                        <DialogPanel className={`px-5 overflow-y-auto bg-white rounded-xl max-h-[30rem] ${content?.size || ModalSize.MEDIUM}`}>
                            {content?.content}
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ReusableModal