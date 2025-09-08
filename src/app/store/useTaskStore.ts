import { create } from "zustand";

export type Task = {
    id: string;
    title: string;
    description?: string;
    status: "todo" | "inprogress" | "approved" | "reject";
    category: "Research" | "Design" | "Other";
    priority?: "Low" | "High";
    links?: number;
    comments?: number;
    dueDate?: string;
    users?: { id: string; name: string; color?: string }[];
}

type Store = {
  tasks: Task[];
  searchQuery: string;
  setTasks: (tasks: Task[]) => void;
  setSearchQuery: (q: string) => void;
  updateTaskStatus: (id: string, status: Task["status"]) => void;
};

export const useTaskStore = create<Store>((set) => ({
  tasks: [],
  searchQuery: "",
  setTasks: (tasks) => {
    set({ tasks });
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  },
  setSearchQuery: (q) => set({ searchQuery: q}),
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