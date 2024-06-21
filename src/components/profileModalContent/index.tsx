import { CustomTab, Heading } from "../index"
import { useModal } from "../../context/ModalContext"
import { FaTimes } from "react-icons/fa";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";


const Index = () => {
    const { hideModal } = useModal()
    return (
        <>
            <div className="flex justify-between mt-4">
                <Heading size="lg" className="w-full leading-tight">
                    User  Profile
                </Heading>
                <FaTimes onClick={hideModal} className='transition-all duration-200 ease-out cursor-pointer text-tertiary size-6 hover:text-black' />
            </div>
            <TabGroup className="w-full mt-4">
                <TabList className="flex px-1 py-0.5 rounded-lg gap-x-1 bg-secondary/20 text-[#333333]">
                    <CustomTab title="profile" />
                    <CustomTab title="security settings" />
                </TabList>
                <TabPanels>
                    <TabPanel>Profile 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam soluta ipsam, ullam provident ad fugiat, optio, eveniet id numquam repellat sint maxime? Velit, quidem explicabo. Aspernatur nesciunt accusantium pariatur!</TabPanel>
                    <TabPanel>Security 5 index Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique recusandae aliquid ea, qui optio ratione alias, incidunt veritatis temporibus ad ipsam magnam natus saepe eveniet dignissimos pariatur doloribus nostrum.</TabPanel>

                </TabPanels>
            </TabGroup>
        </>
    )
}

export default Index