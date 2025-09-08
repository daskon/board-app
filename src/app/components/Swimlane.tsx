import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "../store/useTaskStore";

type Props = {
  title: string;
  status: Task["status"];
  tasks: Task[];
};

const statusColors: Record<Task["status"], string> = {
  todo: "bg-gray-100",
  inprogress: "bg-yellow-100",
  approved: "bg-green-100",
  reject: "bg-red-100",
};

const Swimlane: React.FC<Props> = ({ title, status, tasks }) => {
  return (
    <div className="flex-1 min-w-[250px] bg-gray-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-700">{title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            statusColors[status]
          } text-gray-700`}
        >
          {tasks.length}
        </span>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Swimlane;