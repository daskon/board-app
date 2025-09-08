import { create } from "zustand";

export type Task = {
    id: string;
    title: string;
    description?: string;
    status: "todo" | "inprogress" | "approved" | "reject";
}

type Store = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  updateTaskStatus: (id: string, status: Task["status"]) => void;
};

export const useTaskStore = create<Store>((set) => ({
  tasks: [],
  setTasks: (tasks) => {
    set({ tasks });
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  },
  updateTaskStatus: (id, status) =>
    set((state) => {
      const updated = state.tasks.map((t) =>
        t.id === id ? { ...t, status } : t
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", JSON.stringify(updated));
      }
      return { tasks: updated };
    }),
}));