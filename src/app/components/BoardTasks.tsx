"use client";

import React, { useEffect } from "react";
import { DndContext, DragEndEvent, closestCorners } from "@dnd-kit/core";
import Swimlane from "./Swimlane";
import { Task, useTaskStore } from "../store/useTaskStore";
import mockData from "../data/tasks.json";

const BoardTasks: React.FC = () => {

  const { tasks, setTasks, updateTaskStatus, searchQuery } = useTaskStore();

  useEffect(()=>{
    if(tasks.length === 0) {
      setTasks(mockData as Task[]);
    }
  }, [tasks, setTasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && active) {
      const newStatus = over.id as "todo" | "inprogress" | "approved" | "reject";
      updateTaskStatus(active.id.toString(), newStatus);
    }
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-gray-50 flex-1">
          <div className="border-r border-gray-200">
            <Swimlane
              status="todo"
              tasks={filteredTasks.filter((t) => t.status === "todo")}
            />
          </div>

          <div className="border-r border-gray-200">
          <Swimlane
            status="inprogress"
            tasks={filteredTasks.filter((t) => t.status === "inprogress")}
          />
          </div>

          <div className="border-r border-gray-200">
          <Swimlane
            status="approved"
            tasks={filteredTasks.filter((t) => t.status === "approved")}
          />
          </div>

          <Swimlane
            status="reject"
            tasks={filteredTasks.filter((t) => t.status === "reject")}
          />
        </div>
    </DndContext>
  );
};

export default BoardTasks;
