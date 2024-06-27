
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CustomButton, FilterSelect, Heading } from '../index'
import { IoIosFunnel } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';


import { LiaTimesSolid } from 'react-icons/lia';




type Status = {
    id: number
    status: string
}


const dates = ['2023-01-01', '2023-02-01', '2023-03-01']
const statuses: Status[] = [
    { id: 1, status: 'All' },
    { id: 2, status: 'Active' },
    { id: 3, status: 'Inactive' },
    { id: 4, status: 'Pending' }
]

const categories = ['Category A', 'Category B', 'Category C']





const FilterControl = () => {

    return (
        <>
            <div className="flex flex-wrap items-center justify-between mt-4 ">
                <div className="flex flex-wrap items-center gap-y-3 gap-x-3 ">
                    <>
                        <Menu>
                            <MenuButton>
                                <CustomButton label="Add filter" variant="white" >
                                    <IoIosFunnel />
                                </CustomButton>
                            </MenuButton>
                            <MenuItems anchor="bottom start" className="p-3 mt-2 bg-white rounded-lg shadow-lg w-96 md:w-1/3 h-fit transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 outline-none">
                                <div className="flex justify-between my-3">
                                    <Heading size="md">
                                        Customize Filters
                                    </Heading>

                                    <MenuItem>
                                        <FaTimes className='font-semibold text-black outline-none cursor-pointer size-5 hover:text-primary focus:outline-none' />
                                    </MenuItem>
                                </div>


                                <div className="body"></div>
                                <div className="w-full my-3 border-b"></div>
                                <div className="flex w-full gap-2 ">
                                    <MenuItem>
                                        <CustomButton label="Cancel" variant="white" className='w-full' size="lg" />
                                    </MenuItem>
                                    <CustomButton label="Add filter" variant="primary" className='w-full font-semibold' size="lg" />
                                </div>

                            </MenuItems>
                        </Menu>
                    </>


                    <FilterSelect<Status>
                        options={statuses}
                        label="Status"
                        keyExtractor={(item) => item.id}
                        displayExtractor={(item) => item.status}
                        onChange={(selected) => console.log(selected.status)}
                    />



                    <FilterSelect<string>
                        options={categories}
                        label="Category"
                        onChange={(selected) => console.log(selected)}
                    />

                    <FilterSelect<string>
                        options={dates}
                        label="Date"
                        displayExtractor={(date) => new Date(date).toLocaleDateString()}
                        onChange={(selected) => console.log(selected)}
                    />


                    <CustomButton variant="white">
                        <span>Clear Filter</span>
                        <LiaTimesSolid />
                    </CustomButton>

                </div>


            </div>


        </>


    )
}

export default FilterControl