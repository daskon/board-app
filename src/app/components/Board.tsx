"use client";

import React, { useEffect } from "react";
import Swimlane from "./Swimlane";
import { useTaskStore } from "../store/useTaskStore";
import tasksData from "../data/tasks.json";

const Board: React.FC = () => {
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    setTasks(tasksData);
  }, [setTasks]);

  return (
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
  );
};

export default Board;