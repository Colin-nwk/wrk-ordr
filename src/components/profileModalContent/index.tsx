import { CustomTab, Heading, MainInput, CustomButton, VerificationRadio } from "../index"
import { useModal } from "../../context/ModalContext"
import { FaTimes, FaCamera } from "react-icons/fa";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { avatar, qrcode } from "../../assets";


const Index = () => {
    const { hideModal } = useModal()
    return (
        <>
            <div className="flex justify-between mt-4">
                <Heading size="lg" className="w-full leading-tight">
                    User  Profile
                </Heading>
                <FaTimes onClick={hideModal} className='text-black transition-all duration-200 ease-out cursor-pointer hover:text-tertiary size-5' />
            </div>
            <div className="my-6 border-t"></div>
            <TabGroup className="w-full mt-4 ">
                <TabList className="flex px-1 py-0.5 rounded-lg gap-x-1 bg-secondary/20 text-[#333333]">
                    <CustomTab title="profile" />
                    <CustomTab title="security settings" />
                </TabList>
                <TabPanels className="mt-4">
                    <TabPanel>
                        <div className="w-full space-y-4">

                            <div className="flex items-center justify-between">
                                <div>

                                    <span className="text-sm font-semibold text-black/80">Profile Picture</span>
                                    <div className="relative rounded-full size-20 ">
                                        <img
                                            src={avatar}
                                            alt="Profile Picture"
                                            className="rounded-full cursor-pointer size-full"

                                        />
                                        <span className="bg-[#eee] size-7 rounded-full absolute bottom-0 right-0 flex items-center justify-center">
                                            <FaCamera className='text-center transition-all duration-200 ease-out cursor-pointer text-[#444444] size-4 hover:text-black' />
                                        </span>
                                    </div>
                                </div>
                                <CustomButton label="save change" />
                            </div>
                            <MainInput label="name" placeholder="Job title" />
                            <MainInput label="email" placeholder="Client Email" />
                            <MainInput label="role" placeholder="Tech Support" />
                            <MainInput label="telephone No" placeholder="+0000000" />
                            <MainInput label="address" placeholder="address" />
                        </div>
                    </TabPanel>
                    <TabPanel className="space-y-4">
                        <Heading size="md" className="w-full leading-tight">
                            Password
                        </Heading>
                        <div className="space-y-4">
                            <span className="text-sm font-semibold text-black/80">Fill in the info to reset your password</span>

                            <MainInput label="New Password" placeholder="Client Name" />
                            <MainInput label="Confirm New Password" placeholder="Client Name" />
                            <CustomButton label="change password" />
                        </div>

                        <Heading size="md" className="w-full leading-tight mt-7">
                            Two Step Verification
                        </Heading>
                        <span className="py-4 text-sm font-semibold text-black/80">Fill in the, you will need your password  and verification code</span>

                        <VerificationRadio />
                        <div className="mt-4">

                            <img src={qrcode} alt="qrcode" className="w-40 h-fit" />
                            {/* <CiBarcode  /> */}
                            <span className="mt-2 font-medium">Scan code</span>
                            <CustomButton label="activate" variant="transparent" />
                        </div>

                        <div className="space-y-4">
                            <Heading size="md" className="w-full leading-tight">
                                Delete Account
                            </Heading>
                            <span className="mt-2 font-medium">Delete your account and all related documents from your organisation. This action is permanent and cannot be undone.</span>
                            <CustomButton label="delete account" variant="danger" />
                        </div>
                    </TabPanel>

                </TabPanels>
            </TabGroup>
        </>
    )
}

export default Index