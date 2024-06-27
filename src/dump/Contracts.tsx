import React, { useState } from "react";
import { CustomButton, Heading, Wrapper, SimpleTable, useFilters, useTableHideColumns } from "../components";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { IoIosFunnel } from 'react-icons/io';

const Contracts = () => {
    const { columns, visibleColumns, data, toggleColumnVisibility } = useTableHideColumns();
    const { filters, addFilter, removeFilter, updateFilter, clearFilters } = useFilters();

    // State to handle new filter inputs
    const [newFilterKey, setNewFilterKey] = useState('');
    const [newFilterValue, setNewFilterValue] = useState('');
    const [newFilterType, setNewFilterType] = useState('text');

    const handleAddFilter = () => {
        addFilter({ key: newFilterKey, value: newFilterValue, type: newFilterType });
        setNewFilterKey('');
        setNewFilterValue('');
        setNewFilterType('text');
    };

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between mb-4">
                <Heading size="lg">List of Contracts</Heading>
                <CustomButton onClick={handleAddFilter}>
                    Add Custom Filter <FaPlus />
                </CustomButton>
            </div>

            <div className="flex flex-wrap items-center gap-x-3">
                <Menu as="div" className="relative">
                    <MenuButton as={CustomButton} variant="white">
                        Add filter <IoIosFunnel />
                    </MenuButton>
                    <MenuItems className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white">
                        <div className="p-4">
                            <input type="text" placeholder="Filter key" value={newFilterKey} onChange={(e) => setNewFilterKey(e.target.value)} className="input input-bordered w-full mb-2" />
                            <input type="text" placeholder="Filter value" value={newFilterValue} onChange={(e) => setNewFilterValue(e.target.value)} className="input input-bordered w-full mb-2" />
                            <select className="select select-bordered w-full mb-2" value={newFilterType} onChange={(e) => setNewFilterType(e.target.value)}>
                                <option value="text">Text</option>
                                <option value="select">Select</option>
                                <option value="date">Date</option>
                            </select>
                            <CustomButton onClick={handleAddFilter} variant="primary">
                                Add Filter
                            </CustomButton>
                        </div>
                    </MenuItems>
                </Menu>
            </div>

            <Wrapper className="mt-4">
                <SimpleTable columns={visibleColumns} data={data} />
            </Wrapper>
        </div>
    );
};

export default Contracts;
