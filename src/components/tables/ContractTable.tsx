import { HiDotsHorizontal } from "react-icons/hi";

const ContractTable = () => {
    return (
        <div>
            <div className="relative overflow-x-scroll ">
                <table className="w-full text-sm text-left rtl:text-right ">
                    <thead className="text-sm text-black capitalize bg-secondary/5 ">
                        <tr>
                            <th scope="col" className="p-4">
                            </th>
                            <th scope="col" className="px-2 py-1 ">
                                Contract title
                            </th>
                            <th scope="col" className="px-2 py-1">
                                Contract No.
                            </th>
                            <th scope="col" className="px-2 py-1">
                                Status
                            </th>
                            <th scope="col" className="px-2 py-1">
                                Provider Name
                            </th>
                            <th scope="col" className="px-2 py-1">
                                Start Date
                            </th>
                            <th scope="col" className="px-2 py-1">
                                End Date
                            </th>

                            <th scope="col" className="px-2 py-1">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50 ">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 " />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-2 py-1 font-medium whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-2 py-1">
                                Silver
                            </td>
                            <td className="px-2 py-1">
                                Laptop
                            </td>
                            <td className="px-2 py-1">
                                Yes
                            </td>
                            <td className="px-2 py-1">
                                Yes
                            </td>

                            <td className="px-2 py-1">
                                3.0 lb.
                            </td>
                            <td className="flex items-center px-2 py-1">
                                <HiDotsHorizontal className="cursor-pointer size-5" />
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ContractTable