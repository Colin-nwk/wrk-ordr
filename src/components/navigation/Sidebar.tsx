
import { Link, NavLink } from "react-router-dom";
import { FaFile, FaEnvelope } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import { icons } from "../../assets/index";
import { MageDashboardFill } from "../icons/MageDashboardFill";
import { Document } from "../icons/Document";
const generalLinks = [
    { path: "/", label: "Dashboard", icon: MageDashboardFill, image: "" },
    { path: "/contracts", label: "Contracts", icon: Document, image: "" },
    { path: "/jobs", label: "Jobs", icon: TbBriefcaseFilled, image: icons.paper },
    { path: "/messages", label: "Messages", icon: FaEnvelope, image: "" },
    { path: "/reports", label: "Reports", icon: TbBriefcaseFilled, image: "" },
];

const planningLinks = [
    { path: "/planning", label: "Planning", icon: MageDashboardFill, image: "" },
    { path: "/schedule", label: "My Schedule", icon: FaFile, image: "" },
    { path: "/events", label: "Events", icon: TbBriefcaseFilled, image: "" },
];

const Sidebar = () => {
    return (
        <>
            <div className="z-30 flex flex-col justify-between w-64 px-8 py-6 mt-10">
                <aside className="pb-6 border-b border-gray-300">
                    <h4 className="px-2 my-2 text-sm text-secondary">General</h4>
                    <nav className="flex flex-col items-start justify-center space-y-1.5 text-secondary">
                        {generalLinks.map(({ path, label, icon: Icon }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `w-full p-2 transition-all rounded-lg cursor-pointer flex items-center  ${isActive ? "bg-primary text-white" : "hover:bg-secondary/10"
                                    }`
                                }
                            >
                                {/* {image && <img src={image} alt="icon" className="w-6 h-6 mr-2" />} */}
                                <Icon className="mr-2 size-6" />
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>
                <aside className="pb-6 border-b border-gray-300">
                    <h4 className="px-2 my-2 text-sm text-secondary">Planning</h4>
                    <nav className="flex flex-col items-start justify-center space-y-1.5 text-secondary">
                        {planningLinks.map(({ path, label, icon: Icon }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `w-full p-2 transition-all rounded-lg cursor-pointer flex items-center  ${isActive ? "bg-primary text-white" : "hover:bg-secondary/10"
                                    }`
                                }
                            >

                                <Icon className="mr-2 size-6" />
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>
                <div>
                    <Link
                        to="/logout"
                        className="flex items-center p-2 mt-4 space-x-1 rounded-lg text-secondary hover:bg-secondary/10"
                    >
                        <IoLogOut className="mr-2 text-secondary size-6" />
                        Logout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;