// import { TableColumn, TableData } from '../../hooks/useTableHideColumns'

// interface TableProps<T extends TableData> {
//     columns: TableColumn[]
//     data: T[]
// }

// const SimpleTable=<T extends TableData>({ columns, data }: TableProps<T>)=> {
//     return (
//         <table className="w-full border-collapse">
//             <thead>
//                 <tr className="bg-gray-100">
//                     {columns.filter(col => col.visible).map(col => (
//                         <th key={col.id} className="p-2 text-left border">
//                             {col.label}
//                         </th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((row, index) => (
//                     <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                         {columns.filter(col => col.visible).map(col => (
//                             <td key={col.id} className="p-2 border">
//                                 {row[col.id]}
//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     )
// }

// export default SimpleTable



import { HiDotsHorizontal } from 'react-icons/hi'
import { TableColumn, TableData } from '../../hooks/useTableHideColumns'

interface TableProps<T extends TableData> {
    columns: TableColumn[]
    data: T[]
}

const SimpleTable = <T extends TableData>({ columns, data }: TableProps<T>) => {
    return (

        <div className="relative overscroll-x-scroll bg-white">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className='text-sm  capitalize '>
                    <tr className="bg-secondary/5 rounded-t-xl text-black">
                        <th scope="col" className="p-4">{" "}
                        </th>
                        {columns.filter(col => col.visible).map(col => (
                            <th key={col.id} scope="col" className="px-2 py-1 whitespace-nowrap">
                                {col.label}
                            </th>
                        ))}
                        <th scope="col" className="px-2 py-1">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {data.map((row, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50  ">

                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 " />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>

                            {columns.filter(col => col.visible).map(col => (
                                <td key={col.id} scope="row" className="px-2 py-1 font-medium whitespace-nowrap">
                                    {row[col.id]}
                                </td>
                            ))}
                            <td className="flex items-center justify-center px-2 py-1">
                                <HiDotsHorizontal className="cursor-pointer size-5" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SimpleTable



