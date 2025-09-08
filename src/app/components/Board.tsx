"use client";

import React, { useEffect } from "react";
import Swimlane from "./Swimlane";
import { Task, useTaskStore } from "../store/useTaskStore";
import tasksData from "../data/tasks.json";
import {
    DndContext,
    DragEndEvent,
    closestCorners,
} from "@dnd-kit/core"

const Board: React.FC = () => {
  const { tasks, setTasks, updateTaskStatus } = useTaskStore();

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(tasksData as Task[]);
    }
  }, [setTasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && active) {
      const newStatus = over.id as "todo" | "inprogress" | "approved" | "reject";
      updateTaskStatus(active.id.toString(), newStatus);
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
        <Swimlane
            title="To Do"
            status="todo"
            tasks={tasks.filter((t) => t.status === "todo")}
        />
        <Swimlane
            title="In Progress"
            status="inprogress"
            tasks={tasks.filter((t) => t.status === "inprogress")}
        />
        <Swimlane
            title="Approved"
            status="approved"
            tasks={tasks.filter((t) => t.status === "approved")}
        />
        <Swimlane
            title="Reject"
            status="reject"
            tasks={tasks.filter((t) => t.status === "reject")}
        />
        </div>
    </DndContext>
  );
};

export default Board;