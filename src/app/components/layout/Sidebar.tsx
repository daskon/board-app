import React from "react";
import { Cog6ToothIcon, ChevronDownIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Dashboard", icon: <img src="/home.svg" className="w-6 h-6" alt="dashboard" /> },
  { name: "Dropdown", icon: <img src="/folder.svg" className="w-6 h-6" alt="folder" /> },
  { name: "Messages", icon: <img src="/message.svg" className="w-6 h-6" alt="message" />, badge: 3 },
  { name: "Calendar", icon: <img src="/calender.svg" className="w-6 h-6" alt="calender" /> },
  { name: "Team members", icon: <img src="/team.svg" className="w-6 h-6" alt="team" /> },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-gray-200 flex flex-col">
      <div className="h-18 flex items-center px-6 font-bold text-lg text-blue-600">
        Board <span className="text-gray-900">App</span>
      </div>

      <div className="px-4 py-3 mx-2 mt-2 rounded-lg border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#353945] flex items-center justify-center">
            <img src="/folder.svg" alt="workspace" className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400">workspace</p>
            <p className="text-sm font-medium text-gray-900">Root folder</p>
          </div>
        </div>
        <ChevronDownIcon className="w-5 h-5 text-black font-bold" />
      </div>

      <nav className="flex-1 space-y-1 mt-2 border-t border-gray-200">
        {links.map((link) => (
          <button
            key={link.name}
            className="flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors relative"
          >
            {link.icon}
            <span className="ml-4">{link.name}</span>
            {link.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {link.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="border-t border-gray-200 mt-4">
        <button className="flex items-center w-full px-6 py-3 text-gray-600 hover:bg-gray-100">
          <Cog6ToothIcon className="w-6 h-6" />
          <span className="ml-4">Support</span>
        </button>
        <button className="flex items-center ml-5 mb-3 w-55 px-6 py-3 bg-[#353945] text-white rounded-md font-medium hover:bg-gray-100">
          <ArrowLeftEndOnRectangleIcon className="w-5 mr-3" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;