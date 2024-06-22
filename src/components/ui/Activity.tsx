import Heading from "./Heading"
import { nature } from "../../assets"
import { useModal, ModalType, ModalSize } from "../../context/ModalContext"
import { JobModalContent } from "../index"

const Activity = () => {
    const { showModal } = useModal();

    return (
        <>
            <aside className="w-full h-full mt-4">
                <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer" onClick={() => showModal(ModalType.JOB, {
                    content: <JobModalContent />,
                    size: ModalSize.LARGE
                })}>
                    <img src={nature} alt="" className="size-[80px] rounded-md" />
                    <div className="flex flex-col">
                        <Heading size="md" className="w-full line-clamp-1">
                            Grace Jones uploaded a file
                        </Heading>
                        <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                        <span className="font-medium text-paragraph line-clamp-2">James Carter</span>
                    </div>
                </div>



                <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer" onClick={() => showModal(ModalType.JOB, {
                    content: <JobModalContent />,
                    size: ModalSize.LARGE
                })}>
                    <div className="flex flex-col">
                        <Heading size="md" className="w-full line-clamp-1">
                            Grace Jones uploaded a file
                        </Heading>
                        <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                        <span className="font-medium text-paragraph line-clamp-1">James Carter</span>
                        <p className="text-base font-light line-clamp-2">Lorem ipsum dolor </p>
                    </div>
                </div>

                <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer" onClick={() => showModal(ModalType.JOB, {
                    content: <JobModalContent />,
                    size: ModalSize.MEDIUM
                })}>
                    <div className="flex flex-col">
                        <Heading size="md" className="w-full line-clamp-1">
                            Grace Jones uploaded a file
                        </Heading>
                        <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                        <span className="font-medium text-paragraph line-clamp-1">James Carter</span>
                        <p className="text-base font-light line-clamp-2">Lorem ipsum dolor </p>
                    </div>
                </div>
            </aside >
        </>
    )
}

export default Activity


