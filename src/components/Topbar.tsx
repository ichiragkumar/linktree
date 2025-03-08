import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const username = "JohnDoe";
  const email = "john@example.com";

  return (
    <div className="w-full bg-gray-800 p-4 flex justify-end relative">
      <div className="relative cursor-pointer">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 text-white focus:outline-none cursor-pointer"
        >
          <FaUserCircle className="text-2xl" />
          <span>{username}</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
            <div className="p-4">
              <p className="text-gray-700 font-semibold border-b-2">{username}</p>
              <p className="text-gray-500 text-sm border-b-4">{email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
