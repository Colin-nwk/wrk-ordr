
import { Link, NavLink, useLocation } from "react-router-dom";

import { MageDashboardFill } from "../icons/MageDashboardFill";
import { Document } from "../icons/Document";
import { Briefcase } from "../icons/Briefcase"
import { Envelop } from "../icons/Envelop"
import { Calender } from "../icons/Calender"
import { Logout } from "../icons/Logout"
import { useEffect } from "react";
import { SettingsIcon } from '../icons/SettingsIcon';
import { ActivityIcon } from "../icons/ActivityIcon"
import { ArrowUpIcon } from '../icons/ArrowUpIcon';



const generalLinks = [
    { path: "/", label: "Dashboard", icon: MageDashboardFill, },
    { path: "/contracts", label: "Contracts", icon: Document, },
    { path: "/jobs", label: "Jobs", icon: Briefcase, },
    { path: "/messages", label: "Messages", icon: Envelop, },
    { path: "/reports", label: "Reports", icon: ActivityIcon, },
];

const planningLinks = [
    { path: "/messages", label: "Planning", icon: MageDashboardFill, },
    {
        path: "/reports", label: "My Schedule", icon: SettingsIcon, sub: [
            { path: "/", label: "label" },
            { path: "/", label: "label" },
            { path: "/", label: "label" }
        ]
    },
    {
        path: "/jobs", label: "Events", icon: Calender,
        sub: [
            { path: "/", label: "label" },
            { path: "/", label: "label" },
            { path: "/", label: "label" }
        ]
    },
];



const SidebarSingle = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        const elements = document.querySelectorAll('.animated-appearance');
        elements.forEach(el => {
            setTimeout(() => {
                el.classList.add('show');
            }, 100);
        });
    }, [pathname]);

    return (
        <>
            <div className="z-30 flex flex-col justify-between w-64 px-8 py-6 mt-10">
                <aside className="border-b border-gray-300 pb-7">
                    <h4 className="px-2 my-2 text-sm text-secondary">General</h4>
                    <nav className="flex flex-col items-start justify-center space-y-1 text-secondary">
                        {generalLinks.map(({ path, label, icon: Icon }) => (
                            <div key={path} className="w-full h-full">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `w-full p-2 transition-all rounded-lg cursor-pointer flex items-center  ${isActive ? "bg-primary text-white" : "hover:bg-secondary/10"
                                        }`
                                    }
                                >
                                    <Icon className="mr-2 size-6" />
                                    {label}

                                </NavLink>
                            </div>
                        ))}
                    </nav>
                </aside>
                <aside className="pb-6 border-b border-gray-300">
                    <h4 className="px-2 my-2 text-sm text-secondary">Planning</h4>
                    <nav className="flex flex-col items-start justify-center space-y-1 text-secondary">
                        {planningLinks.map(({ path, label, icon: Icon, sub }) => (

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

                                <span className="flex flex-col space-y-3">
                                    {pathname === path && sub?.map((el, index) => (
                                        <span
                                            key={index}
                                            className={` first-of-type:mt-4 relative flex items-center justify-start ml-2 space-x-5 h-fit animated-appearance ${index !== sub.length - 1 ? 'border-l-before' : 'border-l-before last'}`}
                                        >
                                            <span className="border-b-[1px] rounded-bl-lg h-5 w-2.5 absolute -top-4 first-of-type:mt-2.5 "></span>
                                            <Link to={el.path} className="w-full h-full text-sm font-medium">{el.label}</Link>
                                        </span>
                                    ))}
                                </span>
                            </div>
                        ))}
                    </nav>
                </aside>
                <div>
                    <Link
                        to="/logout"
                        className="flex items-center p-2 mt-4 space-x-1 rounded-lg text-secondary hover:bg-secondary/10"
                    >
                        <Logout className="mr-2 text-secondary size-6" />
                        Logout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SidebarSingle;