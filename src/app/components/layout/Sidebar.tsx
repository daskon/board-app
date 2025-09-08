import React from "react";
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Dashboard", icon: <HomeIcon className="w-6 h-6" /> },
  { name: "Dropdown", icon: <FolderIcon className="w-6 h-6" /> },
  { name: "Messages", icon: <UsersIcon className="w-6 h-6" />, badge: 3 },
  { name: "Calendar", icon: <FolderIcon className="w-6 h-6" /> },
  { name: "Team members", icon: <UsersIcon className="w-6 h-6" /> },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-18 flex items-center px-6 font-bold text-lg text-blue-600">
        Board <span className="text-gray-900">App</span>
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
        <button className="flex items-center w-full px-6 py-3 text-gray-900 font-medium hover:bg-gray-100">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
