
import Sidebar from "../components/navigation/Sidebar";
import Topbar from "../components/navigation/Topbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Top Navigation */}
          <Topbar />

          {/* Content Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#F5F5F8]">
            {children}
            {/* <h2 className="mb-4 text-xl font-bold">Overview</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
