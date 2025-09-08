"use client";

import React, { useEffect } from "react";
import BoardHeader from "./BoardHeader";
import BoardTasks from "./BoardTasks";
import { Task, useTaskStore } from "../store/useTaskStore";
import tasksData from "../data/tasks.json";

const Board: React.FC = () => {
  const { setTasks } = useTaskStore();

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(tasksData as Task[]);
    }
  }, [setTasks]);

  return (
    <div className="flex flex-col h-full">
      <BoardHeader />
      <BoardTasks />
    </div>
  );
};

export default Board;
