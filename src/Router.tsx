import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashbaord from "./pages/Dashbaord";
import Projects from "./pages/Projects";
import Contracts from "./pages/Contracts";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashbaord />,
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
                path: "/messages",
                element: <Messages />
            }
        ]
    },

]);

export default router;