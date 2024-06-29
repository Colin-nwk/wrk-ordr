import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Contracts from "./pages/Contracts";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,

                index: true
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contracts",
                element: <Contracts />
            },
            {
                path: "/jobs",
                element: <Jobs />
            },
            {
                path: "/reports",
                element: <Reports />
            },
            {
                path: "/messages",
                element: <Messages />
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }

]);

export default router;