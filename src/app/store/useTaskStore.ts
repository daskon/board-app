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
};

export const useTaskStore = create<Store>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));