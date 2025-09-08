import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "../store/useTaskStore";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  status: Task["status"];
  tasks: Task[];
};

const statusStyles: Record<Task["status"], string> = {
  todo: "bg-gray-200 text-gray-700",
  inprogress: "bg-yellow-200 text-yellow-800",
  approved: "bg-green-200 text-green-800",
  reject: "bg-red-200 text-red-800",
};

const Swimlane: React.FC<Props> = ({ status, tasks }) => {
  const { setNodeRef } = useDroppable({ id: status });
  return (
    <div
      ref={setNodeRef}
      className="flex flex-col bg-gray-50 rounded-xl p-4 min-h-[500px]"
    >
      <div className="flex items-center justify-between mb-3">
      </div>
      <div className="flex-1">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Swimlane;
