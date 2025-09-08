import React from "react";
import { Task } from "../store/useTaskStore";
import { useDraggable } from "@dnd-kit/core";

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
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
        className="bg-white rounded-xl shadow p-3 mb-3 border border-gray-200"
    >
      <h4 className="font-semibold text-gray-800">{task.title}</h4>
      {task.description && (
        <p className="text-sm text-gray-500 mt-1">{task.description}</p>
      )}
    </div>
  );
};

export default TaskCard;