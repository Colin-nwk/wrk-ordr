import { CustomButton, Heading, MainInput } from "../index"
import { useModal } from "../../context/ModalContext"
import { FaTimes } from "react-icons/fa"
import { Briefcase } from "../icons/Briefcase"



const ContractModalContent = () => {
    const { hideModal } = useModal()
    return (
        <div className="">
            <div className="sticky top-0 z-10 bg-white">
                <div className="flex items-center justify-between w-full pt-3 ">

                    <div className="flex items-center justify-center space-x-2">

                        <Briefcase className="p-2 rounded-full text-primary bg-primary/25 size-10" />
                        <div className="flex flex-col space-y-1">

                            <Heading size="lg" className="flex w-full leading-tight">
                                Create Contract
                            </Heading>
                            <p>Add new Contract and save</p>
                        </div>
                    </div>
                    <FaTimes onClick={hideModal} className='text-black transition-all duration-200 ease-out cursor-pointer hover:text-tertiary size-5' />

                </div>
                <div className="my-6 border-t"></div>
            </div>

            <div className="pt-2 gap-y-3">
                <div className="grid w-full grid-cols-2 space-x-3 ">
                    <MainInput label="status" placeholder="Select Contract Status" />
                    <MainInput label="service" placeholder="service Number" />
                </div>
                <MainInput label="contract" placeholder="Contract Title" />
                <MainInput label="provider" placeholder="enter Provider" />

                <div className="grid w-full grid-cols-2 space-x-3 ">
                    <MainInput label="address" placeholder="Additional Address" />
                    <MainInput label="additional" placeholder="service Number" />
                </div>

                <div className="grid w-full grid-cols-2 space-x-3 ">
                    <MainInput label="start date" placeholder="Start Date" />
                    <MainInput label="end date" placeholder="End Date" />
                </div>
            </div>
            <div className="sticky bottom-0 flex w-full py-5 space-x-3 bg-white">
                <CustomButton variant="white" label="Cancel" className="w-full" />
                <CustomButton variant="primary" label="Create Contract" className="w-full" />
            </div>
        </div>
    )
}

export default ContractModalContent