import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import { Heading, CustomTab, Dropdown } from "../index"

import Info from "./Info"
import { Appointments } from "../index"


const Index = () => {

    const dropdownItems = [
        {
            title: 'Edit Job',
            onClick: () => {
                // Handle edit job
            }
        },
        {
            title: 'Create Sub Job',
            onClick: () => {
                // Handle create sub job
            }
        },
        {
            title: 'Create Complaint',
            onClick: () => {
                // Handle create complaint
            }
        },
        {
            title: 'Delete',
            onClick: () => {
                // Handle delete
            }
        }
    ]
    return (
        <>
            <div className="flex justify-between">
                <div className="flex space-x-2 ">
                    <span className="bg-[#68D391] rounded-full size-5 mt-1"></span>
                    <div className="flex flex-col mb-1 ">
                        <Heading size="lg" className="w-full leading-tight">
                            Job Title
                        </Heading>
                        <p className='capitalize'>Job location</p>
                    </div>
                </div>
                <Dropdown items={dropdownItems} />
            </div>
            {/* tabs */}
            <TabGroup className="w-full mt-4">
                <TabList className="flex w-full px-1 py-0.5 rounded-lg gap-x-1 bg-secondary/20 text-[#333333]">
                    <CustomTab title="Info" />
                    <CustomTab title="appointments" />
                    <CustomTab title="files" />
                    <CustomTab title="documentation" />
                    <CustomTab title="Account" />
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Info />
                    </TabPanel>
                    <TabPanel>
                        <Appointments />
                    </TabPanel>
                    <TabPanel>Content 3</TabPanel>
                    <TabPanel>Content 4</TabPanel>
                    <TabPanel>Content 5 index </TabPanel>

                </TabPanels>
            </TabGroup>
        </>
    )
}

export default Index