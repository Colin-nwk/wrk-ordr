import React, { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

interface TableColumn {
    id: string;
    label: string;
    visible: boolean;
}

interface TableDataRow {
    id: string;
    [key: string]: any;
    children?: TableDataRow[];
}

interface TableProps {
    columns: TableColumn[];
    data: TableDataRow[];
}

const ComplexTable: React.FC<TableProps> = ({ columns, data }) => {
    const [openRows, setOpenRows] = useState<Set<string>>(new Set());

    const toggleRow = (id: string) => {
        setOpenRows(prev => {
            const newOpenRows = new Set(prev);
            if (newOpenRows.has(id)) {
                newOpenRows.delete(id);
            } else {
                newOpenRows.add(id);
            }
            return newOpenRows;
        });
    };

    const renderRow: any = (row: TableDataRow, level = 0) => (
        <>
            <tr key={row.id} className={`bg-white border-b hover:bg-gray-50 ${level > 0 ? 'bg-gray-100' : ''}`}>
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    </div>
                </td>
                {columns.filter(col => col.visible).map(col => (
                    <td key={col.id} className="px-2 py-1 whitespace-nowrap">
                        {col.id === 'toggle' && row.children?.length ? (
                            <button onClick={() => toggleRow(row.id)} className="text-blue-500">
                                {openRows.has(row.id) ? 'Hide Children' : 'Show Children'}
                            </button>
                        ) : (
                            row[col.id]
                        )}
                    </td>
                ))}
                <td className="flex items-center justify-center px-2 py-1">
                    <HiDotsHorizontal className="cursor-pointer" />
                </td>
            </tr>
            {openRows.has(row.id) && row.children?.map(childRow => renderRow(childRow, level + 1))}
        </>
    );

    return (
        <div className="relative overflow-x-auto bg-white">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="bg-secondary/5 rounded-t-xl text-black">
                        <th className="p-4"> </th>
                        {columns.map(col => (
                            <th key={col.id} className="px-2 py-1 whitespace-nowrap">
                                {col.label}
                            </th>
                        ))}
                        <th className="px-2 py-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => renderRow(row))}
                </tbody>
            </table>
        </div>
    );
};

export default ComplexTable;
