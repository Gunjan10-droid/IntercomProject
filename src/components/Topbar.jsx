import { FaSearch } from 'react-icons/fa';

function Topbar({ searchQuery, onSearchChange }) {
  return (
    <div className="relative w-full max-w-md mb-4">
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search conversations..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
      />
    </div>
  );
}

export default Topbar;
