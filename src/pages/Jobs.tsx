import { ContractModalContent, ContractTable, CustomButton, FilterControl, Heading, SearchInput, Wrapper } from "../components"
import { FaPlus } from "react-icons/fa6";
import { CiImport } from "react-icons/ci";

import { useModal, ModalType, ModalSize } from "../context/ModalContext"


const Jobs = () => {
    const { showModal } = useModal();
    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between space-y-4">

                <Heading size="lg">
                    List of Jobs <span className="text-sm text-primary">(10)</span>
                </Heading>

                <div className="flex justify-between item-center gap-x-4">

                    <CustomButton variant="white" label=" import Job" onClick={() => showModal(ModalType.JOB, {
                        content: <ContractModalContent />,
                        size: ModalSize.MEDIUM
                    })}>
                        <CiImport />
                    </CustomButton>

                    <CustomButton label=" Add Job" onClick={() => showModal(ModalType.JOB, {
                        content: <ContractModalContent />,
                        size: ModalSize.MEDIUM
                    })}>
                        <FaPlus />
                    </CustomButton>
                </div>
            </div>
            <div className="w-1/3">
                <SearchInput className="bg-white" />
            </div>
            {/* <FilterControl /> */}
            <Wrapper className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta dolorum ipsa non unde sit, atque quisquam nobis reiciendis adipisci quasi ipsam nostrum fugiat dolorem voluptas. Odio fuga pariatur perferendis.
                {/* <ContractTable /> */}
            </Wrapper>
        </div>
    )
}

export default Jobs