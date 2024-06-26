import { ContractModalContent, CustomButton, Heading, SearchInput } from "../components"
import { FaPlus } from "react-icons/fa6";
import { IoIosFunnel } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useModal, ModalType, ModalSize } from "../context/ModalContext"

const Contracts = () => {
    const { showModal } = useModal();

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between space-y-4">

                <Heading size="lg">
                    List of Contracts <span className="text-sm text-primary">(10)</span>
                </Heading>
                <CustomButton label=" Add contracts" onClick={() => showModal(ModalType.JOB, {
                    content: <ContractModalContent />,
                    size: ModalSize.MEDIUM
                })}>
                    <FaPlus />
                </CustomButton>
            </div>
            <div className="w-1/3">
                <SearchInput className="bg-white" />
            </div>
            <div className="flex items-center justify-between mt-4 ">
                <div className="flex items-center space-x-3">
                    <CustomButton label="Add filter" variant="white" >
                        <IoIosFunnel />
                    </CustomButton>

                    <CustomButton variant="white" >
                        <span className="font-normal">Status</span>
                        <span className="">All</span>
                        <IoIosArrowDown />
                    </CustomButton>

                    <CustomButton variant="white" >
                        <span className="font-normal ">Date</span>
                        <span className="">20-02.24-10.04.25</span>
                        <IoIosArrowDown />
                    </CustomButton>


                    <CustomButton variant="white">
                        <span>Clear Filter</span>
                        <LiaTimesSolid />
                    </CustomButton>

                    <CustomButton variant="white" >
                        <span className="font-normal ">Category</span>
                        <span className="">All</span>
                        <IoIosArrowDown />
                    </CustomButton>

                </div>
                <CustomButton variant="white" className="px-0.5">
                    <BsThreeDotsVertical className="size-5" />
                </CustomButton>
            </div>
        </div>
    )
}

export default Contracts