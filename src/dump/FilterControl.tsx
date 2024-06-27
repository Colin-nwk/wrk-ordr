
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CustomButton, FilterSelect, Heading, FilterDateRange } from '../components/index'
import { IoIosFunnel } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
// import { IoIosFunnel } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";



type Status = {
    id: number
    status: string
}

interface Person {
    id: number
    name: string
}

const people: Person[] = [
    { id: 1, name: 'Tom Cook' },
    { id: 2, name: 'Wade Cooper' },
    // ...
]

const dates = ['2023-01-01', '2023-02-01', '2023-03-01']
const statuses: Status[] = [
    { id: 1, status: 'Active' },
    { id: 2, status: 'Inactive' },
    { id: 3, status: 'Pending' }
]

const categories = ['Category A', 'Category B', 'Category C']

const dateRanges: any[] = [
    {
        start: new Date(2024, 0, 1),
        end: new Date(2024, 0, 31),
        label: 'January 2024'
    },
    {
        start: new Date(2024, 1, 1),
        end: new Date(2024, 1, 29),
        label: 'February 2024'
    },
    {
        start: new Date(2024, 2, 1),
        end: new Date(2024, 2, 31),
        label: 'March 2024'
    },
    {
        start: new Date(2024, 0, 1),
        end: new Date(2024, 2, 31),
        label: 'Q1 2024'
    },
]


const FilterControl = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between mt-4 ">
                <div className="flex flex-wrap items-center gap-y-3 gap-x-3 ">
                    {/* <FilterControl /> */}
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
                        onChange={(selected) => console.log(selected)}
                    />



                    <FilterSelect<string>
                        options={categories}
                        label="Category"
                        onChange={(selected) => console.log(selected)}
                    />

                    < FilterSelect<Person>
                        options={people}
                        label="People"
                        keyExtractor={(person) => person.id}
                        displayExtractor={(person) => person.name}
                        onChange={(selected) => console.log(selected.name)}
                    />



                    <FilterSelect<string>
                        options={dates}
                        label="Date"
                        displayExtractor={(date) => new Date(date).toLocaleDateString()}
                        onChange={(selected) => console.log(selected)}
                    />

                    <FilterDateRange
                        options={dateRanges}
                        label="Date Range"
                        onChange={(selected) => console.log(selected)}
                    />

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
                <CustomButton variant="white" className="px-[1px]">
                    <BsThreeDotsVertical className="size-5" />
                </CustomButton>
            </div>
        </>


    )
}

export default FilterControl