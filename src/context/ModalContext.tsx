import React, { createContext, useContext, useState, ReactNode } from 'react';
import ReusableModal from '../components/modals/ReusableModal';

enum ModalType {
    JOB,
    PROFILE,
    ERROR,
    CONFIRMATION,
}

enum ModalSize {
    SMALL = 'w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3',
    MEDIUM = 'w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2',
    LARGE = 'w-11/12 lg:w-5/6 2xl:w-2/3',
    FULL = 'w-11/12',
}

export type ModalContent = {
    content: ReactNode;
    size?: ModalSize;
}

interface ModalContextType {
    showModal: (type: ModalType, content: ModalContent) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContent | null>(null);

    const showModal = (type: ModalType, content: ModalContent) => {
        setModalContent({ ...content, size: content.size || ModalSize.MEDIUM });
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            <ReusableModal isOpen={isOpen} onClose={hideModal} content={modalContent} />
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export { ModalType, ModalSize };