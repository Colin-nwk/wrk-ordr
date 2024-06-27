import { ContractModalContent, CustomButton, Heading, SearchInput, Wrapper, HideColumns, SimpleTable, FilterSelect } from "../components"
import { FaPlus } from "react-icons/fa6";
import { useTableHideColumns } from "../hooks/useTableHideColumns";
import { useFilters } from "../hooks/useFilters";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosFunnel } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import { useModal, ModalType, ModalSize } from "../context/ModalContext"




type Status = {
    id: number
    status: string
}


const dates = ['2023-01-01', '2023-02-01', '2023-03-01']
const statuses: Status[] = [
    { id: 1, status: 'All' },
    { id: 2, status: 'Active' },
    { id: 3, status: 'Inactive' },
    { id: 4, status: 'Pending' },
    { id: 5, status: 'Ongoing' }
]

const categories = ['Category A', 'Category B', 'Category C']




const initialColumns = [
    { id: 'title', label: 'Contract title', visible: true },
    { id: 'status', label: 'View Status', visible: true },
    { id: 'provider', label: 'Provider Name', visible: true },
    { id: 'startDate', label: 'Start Date', visible: true },
    { id: 'endDate', label: 'End Date', visible: true },

]

const initialData = [
    { title: 'Contract title one', status: 'Active', provider: 'Provider A', startDate: "2023-03-01", endDate: "2023-03-01" },
    { title: 'Contract title two', status: 'Inactive', provider: 'Provider B', startDate: "2023-03-01", endDate: "2023-03-01" },
    { title: 'Contract title three', status: 'Pending', provider: 'Provider C', startDate: "2023-03-01", endDate: "2023-03-01" },
    { title: 'Contract title four', status: 'Ongoing', provider: 'Provider D', startDate: "2023-03-01", endDate: "2023-03-01" },
]
const Contracts = () => {
    const { columns, visibleColumns, data, toggleColumnVisibility } = useTableHideColumns(initialColumns, initialData)
    const { filters, updateFilter, clearFilters } = useFilters()
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


                                <div className="body">
                                    {/* Add custom filters here or generate custom filters */}
                                </div>
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
                        onChange={(selected) => updateFilter('status', selected.status)}
                        value={statuses.find(s => s.status === filters.status) || statuses[0]}
                    />
                    <FilterSelect<string>
                        options={categories}
                        label="Category"
                        onChange={(selected) => updateFilter('category', selected)}
                        value={filters.category || categories[0]}
                    />
                    <FilterSelect<string>
                        options={dates}
                        label="Date"
                        displayExtractor={(date) => new Date(date).toLocaleDateString()}
                        onChange={(selected) => updateFilter('date', selected)}
                        value={filters.date || dates[0]}
                    />
                    <CustomButton variant="white" onClick={clearFilters}>
                        <span>Clear Filter</span>
                        <LiaTimesSolid />
                    </CustomButton>

                </div>
                <HideColumns columns={columns} onToggleColumn={toggleColumnVisibility} />

            </div>

            <Wrapper className="mt-4">
                <SimpleTable columns={visibleColumns} data={data} />
            </Wrapper>
        </div>
    )
}

export default Contracts