import React from "react";

const BoardHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Project Title */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">
            Sport Xi Project
          </h1>
          <span className="text-sm font-medium bg-yellow-400 text-white px-3 py-1 rounded-full">
            In progress
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 mt-2">event production</p>

        {/* Assigned Users */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-gray-500 text-sm">assigned</span>
          <div className="flex -space-x-2">
            <img
              src="/avatars/u1.png"
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="/avatars/u2.png"
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="/avatars/u3.png"
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-medium border-2 border-white">
              +2
            </div>
          </div>
          <button className="flex items-center text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">
            Manage
          </button>
        </div>

        {/* Last Updated */}
        <p className="text-gray-400 text-sm mt-4">
          Last updated on: 04 April, 2022
        </p>
      </div>

      {/* Lane Labels Row */}
      <div className="flex border-t border-gray-200">
        {[
          { label: "To Do", color: "bg-gray-100 text-gray-800" },
          { label: "In Progress", color: "bg-yellow-400 text-white" },
          { label: "Approved", color: "bg-lime-400 text-white" },
          { label: "Reject", color: "bg-red-600 text-white" },
        ].map((lane) => (
          <div
            key={lane.label}
            className="flex-1 flex items-center justify-between px-6 py-4 border-r border-gray-200"
          >
            <span
              className={`px-4 py-2 rounded-full font-medium text-sm ${lane.color}`}
            >
              {lane.label}
            </span>
            <div className="flex items-center gap-3 text-gray-500">
              <button className="hover:text-gray-700">+</button>
              <button className="hover:text-gray-700">•••</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardHeader;
