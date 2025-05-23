function Sidebar({ toggleCopilot }) {
  return (
    <div className="bg-white shadow-md p-4 w-full md:w-64 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Intercom Clone</h2>
      <nav className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 flex-1">
        <button className="text-left p-2 rounded hover:bg-blue-100 transition duration-200">Home</button>
        <button className="text-left p-2 rounded hover:bg-blue-100 transition duration-200">Messages</button>
        <button className="text-left p-2 rounded hover:bg-blue-100 transition duration-200">Users</button>
      </nav>

      {/* Toggle button at the bottom */}
      <button
        onClick={toggleCopilot}
        className="mt-auto p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Toggle Copilot
      </button>
    </div>
  );
}

export default Sidebar;
