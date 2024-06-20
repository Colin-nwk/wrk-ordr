import Heading from "./Heading"
import { nature } from "../../assets"
// import Job from "../modals/Job"
import Modal from "../modals/Modal"
import { useState } from "react"
// import Job from "../modals/Job"


const Activity = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <aside className="w-full h-full mt-4">
                <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer">
                    <img src={nature} alt="" className="size-[80px] rounded-md" />
                    <div className="flex flex-col">
                        <Heading size="md" className="w-full line-clamp-1">
                            Grace Jones uploaded a file
                        </Heading>
                        <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                        <span className="font-medium text-paragraph line-clamp-2">James Carter</span>
                    </div>
                </div>
                <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex flex-col">
                        <Heading size="md" className="w-full line-clamp-1">
                            Grace Jones uploaded a file
                        </Heading>
                        <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                        <span className="font-medium text-paragraph line-clamp-1">James Carter</span>
                        <p className="text-base font-light line-clamp-2">Lorem ipsum dolor </p>
                    </div>
                    {/* <Job /> */}
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                    {/* <Job /> */}
                </div>

            </aside>
        </>
    )
}

export default Activity


