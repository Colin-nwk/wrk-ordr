
import { Link, useLocation } from "react-router-dom";
import { Logout } from "../../icons/Logout"
import { useEffect } from "react";
import { generalLinks, planningLinks, settingLinks, logLinks } from "../../../data/links";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {

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
            <div className="z-30 flex flex-col justify-between w-64 px-8 py-6 mt-20 bg-white">
                <SidebarMenu links={generalLinks} title="General" pathname={pathname} />
                <SidebarMenu links={planningLinks} title="Planning" pathname={pathname} />
                <SidebarMenu links={logLinks} title="Log" pathname={pathname} />
                <SidebarMenu links={settingLinks} title="Settings" pathname={pathname} />
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

export default Sidebar;