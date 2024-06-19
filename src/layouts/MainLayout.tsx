
import Sidebar from "../components/navigation/Sidebar/Sidebar";
import Topbar from "../components/navigation/Topbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-full">
        <Topbar />
        <div className="flex w-full h-full bg-[#F5F5F8]">
          <Sidebar />
          <div className="flex-1 h-full p-4 overflow-y-auto bg-[#F5F5F8] mt-24">
            {children}
            {/* <div className="flex flex-col flex-1">
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
