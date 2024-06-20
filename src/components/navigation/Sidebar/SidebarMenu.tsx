
import { NavLink } from 'react-router-dom'
import { ArrowUpIcon } from '../../icons/ArrowUpIcon'
import SubMenu from './SubMenu'

const SidebarMenu = ({ links, pathname, title }: { links: any, pathname: string, title: string }) => {
    return (
        <> <aside className="pb-6 border-b border-gray-300">
            <h4 className="px-2 my-2 text-sm text-secondary">{title}</h4>
            <nav className="flex flex-col items-start justify-center space-y-1 text-secondary">
                {links.map(({ path, label, icon: Icon, sub }: { path: string, label: string, icon: any, sub: any }) => (
                    <div key={path} className="w-full h-full">
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                ` w-full p-2 transition-all rounded-lg cursor-pointer flex items-center  ${isActive ? "bg-primary text-white" : "hover:bg-secondary/10"
                                }`
                            }
                        >
                            <Icon className="mr-2 size-6" />
                            {label}
                            {sub && (<ArrowUpIcon className="ml-auto size-3" />)}
                        </NavLink>
                        <SubMenu pathname={pathname} path={path} sub={sub} />
                    </div>
                ))}
            </nav>
        </aside></>
    )
}

export default SidebarMenu