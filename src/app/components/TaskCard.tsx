import React from "react";
import { Task } from "../store/useTaskStore";
import { useDraggable } from "@dnd-kit/core";
import {
  EllipsisHorizontalIcon,
  LinkIcon,
  ChatBubbleLeftIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  console.log(task);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-200 cursor-grab hover:shadow-md transition-shadow flex flex-col gap-3"
    >

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              task.category === "Research"
                ? "bg-green-500"
                : task.category === "Design"
                ? "bg-red-500"
                : "bg-gray-400"
            }`}
          />
          <span className="text-xs text-gray-500 font-medium">
            {task.category}
          </span>
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
      </div>

      <h4 className="font-semibold text-gray-900 text-sm">{task.title}</h4>

      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {task.users?.slice(0, 3).map((user, index) => (
            <div
              key={user.id}
              className="h-5 w-5 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-white"
              style={{
                backgroundColor: "black",
                marginLeft: index === 0 ? 0 : -8,
                zIndex: 10 - index,
              }}
              title={user.name}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
          ))}

          {task.users && task.users.length > 3 && (
            <div
              className="h-5 w-5 rounded-full flex items-center justify-center text-xs font-semibold text-white bg-gray-400 border-2 border-white"
              style={{ marginLeft: -8 }}
              title={`${task.users.length - 3} more users`}
            >
              +{task.users.length - 3}
            </div>
          )}
        </div>

        {task.priority && (
          <span
            className={`flex items-center text-xs px-2 py-1 rounded-md ${
              task.priority === "High"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            ⚡ {task.priority}
          </span>
        )}
      </div>

      <hr className="border-gray-200" />

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <LinkIcon className="h-4 w-4" /> {task.links ?? 0}
        </span>
        <span className="flex items-center gap-1">
          <ChatBubbleLeftIcon className="h-4 w-4" /> {task.comments ?? 0}
        </span>
        {task.dueDate && (
          <span className="flex items-center gap-1">
            <CalendarDaysIcon className="h-4 w-4" /> Due: {task.dueDate}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
