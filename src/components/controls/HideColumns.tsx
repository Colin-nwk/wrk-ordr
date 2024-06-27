
import { Menu, MenuButton, MenuItems } from "@headlessui/react"
import { CustomButton, Heading } from "../index"
import { BsThreeDotsVertical } from "react-icons/bs"
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi"

interface Column {
    id: string
    label: string
    visible: boolean
}

interface HideColumnsProps {
    columns: Column[]
    onToggleColumn: (columnId: string) => void
}

const HideColumns: React.FC<HideColumnsProps> = ({ columns, onToggleColumn }) => {
    return (
        <Menu>
            <MenuButton>
                <CustomButton variant="white" className="px-[1px]">
                    <BsThreeDotsVertical className="size-5" />
                </CustomButton>
            </MenuButton>
            <MenuItems anchor="bottom start" className="p-3 mt-2 bg-white rounded-lg shadow-lg md:w-44 h-fit transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 outline-none gap-y-1">
                <Heading size="sm" className="truncate line-clamp-1">
                    View Columns
                </Heading>
                <span className="text-xs/6">show/hide columns</span>
                <div className="mt-1"></div>
                {columns.map((column) => (
                    <div
                        key={column.id}
                        className="flex items-center justify-between px-2 py-1 transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-primary/10 group"
                        onClick={() => onToggleColumn(column.id)}
                    >
                        <span className="text-sm font-medium text-black capitalize truncate line-clamp-1">
                            {column.label}
                        </span>
                        {column.visible ? (
                            <PiEyeFill className="text-black group-hover:text-primary size-5" />
                        ) : (
                            <PiEyeSlashFill className="text-black group-hover:text-primary size-5" />
                        )}
                    </div>
                ))}
            </MenuItems>
        </Menu>
    )
}

export default HideColumns




// // HideColumns.tsx
// import React from 'react'
// import { Menu, MenuButton, MenuItems } from "@headlessui/react"
// import { Heading } from "../index"
// import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi"
// import { TableColumn } from '../../hooks/useTableHideColumns'

// interface HideColumnsProps {
//     columns: TableColumn[]
//     onToggleColumn: (columnId: string) => void
//     children: (props: { toggleMenu: () => void }) => React.ReactNode
// }

// const HideColumns: React.FC<HideColumnsProps> = ({ columns, onToggleColumn, children }) => {
//     return (
//         <Menu>
//             {({ open }) => (
//                 <>
//                     <MenuButton as={React.Fragment}>
//                         {children({ toggleMenu: () => { } })}
//                     </MenuButton>
//                     <MenuItems anchor="bottom start" className="p-3 mt-2 bg-white rounded-lg shadow-lg md:w-44 h-fit transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 outline-none gap-y-1">
//                         <Heading size="sm" className="truncate line-clamp-1">
//                             View Columns
//                         </Heading>
//                         <span className="text-xs/6">show/hide columns</span>
//                         <div className="mt-1"></div>
//                         {columns.map((column) => (
//                             <div
//                                 key={column.id}
//                                 className="flex items-center justify-between px-2 py-1 transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-primary/10 group"
//                                 onClick={() => onToggleColumn(column.id)}
//                             >
//                                 <span className="text-sm font-medium text-black capitalize truncate line-clamp-1">
//                                     {column.label}
//                                 </span>
//                                 {column.visible ? (
//                                     <PiEyeFill className="text-black group-hover:text-primary size-5" />
//                                 ) : (
//                                     <PiEyeSlashFill className="text-black group-hover:text-primary size-5" />
//                                 )}
//                             </div>
//                         ))}
//                     </MenuItems>
//                 </>
//             )}
//         </Menu>
//     )
// }

// export default HideColumns