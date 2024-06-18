const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="flex flex-col justify-between w-64 px-4 py-6 text-gray-100 bg-gray-800">
          <div>
            <h2 className="mb-4 text-xl font-bold">My Dashboard</h2>
            <nav>
              <a href="#" className="block py-2 hover:text-white">
                Dashboard
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Reports
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Settings
              </a>
            </nav>
          </div>
          <div>
            <a href="#" className="block py-2 hover:text-white">
              Logout
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Top Navigation */}
          <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <h1 className="ml-2 text-xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">Welcome, John Doe</span>
              <img
                src="https://via.placeholder.com/32"
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
          </nav>

          {/* Content Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <h2 className="mb-4 text-xl font-bold">Overview</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Cards go here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
