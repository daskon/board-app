import React from "react";

const BoardHeader: React.FC = () => {

  const users = [
    { id: "u1", name: "Alice" },
    { id: "u2", name: "Bob" },
    { id: "u3", name: "Charlie" },
    { id: "u4", name: "David" },
    { id: "u5", name: "Eve" },
  ];

  const maxVisible = 3;
  const visibleUsers = users.slice(0, maxVisible);
  const extraUsers = users.length - maxVisible;

  return (
    <div className="bg-white border-b border-gray-200">

      <div className="px-6 py-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">
            Sport Xi Project
          </h1>
          <span
            className="text-sm font-medium text-black px-3 py-1 rounded-full"
            style={{backgroundColor: "#FFA800"}}
          >
            In progress
          </span>
        </div>

        <p className="text-gray-400 mt-2">event production</p>

        <div className="flex items-center gap-3 mt-3">
          <span className="text-gray-500 text-sm">assigned</span>

          <div className="flex items-center">
              {visibleUsers.map((user, index) => (
                <div
                  key={user.id}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium border-2 border-white"
                  style={{
                    backgroundColor: "black",
                    marginLeft: index === 0 ? 0 : -8, // overlap
                    zIndex: 10 - index,
                  }}
                  title={user.name}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              ))}

              {extraUsers > 0 && (
                <div
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-medium border-2 border-white"
                  style={{ marginLeft: -8 }}
                  title={`${extraUsers} more users`}
                >
                  +{extraUsers}
                </div>
              )}
            </div>
          <button className="flex items-center text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">
            Manage
          </button>
        </div>

        <div className="mt-4 border-t border-gray-200">
          <p className="text-gray-400 text-sm mt-4">
            Last updated on: 04 April, 2022
          </p>
        </div>

      </div>

      <div className="flex border-t border-gray-200">
        {[
          { label: "To Do", color: "bg-[#E6E8EC] text-black" },
          { label: "In Progress", color: "bg-[#FFA800] text-black" },
          { label: "Approved", color: "bg-[#AEE753] text-black" },
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
