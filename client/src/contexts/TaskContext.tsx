import React, { createContext, FC, ReactNode, useState } from "react";
import { Task } from "../types/task.types";

interface TaskContextType {
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  editTask: (task: Task) => void;
  taskList: Task[];
  editingItemId: number;
  setEditingItemId: (editingItemIndex: number) => void;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [editingItemId, setEditingItemId] = useState<number>(0);

  const addTask = (task: Task) => {
    setTaskList([task, ...taskList]);
  };

  const removeTask = (task: Task) => {
    setTaskList(taskList.filter((taskItem) => taskItem.id !== task.id));
    setEditingItemId(0);
  };

  const editTask = (task: Task) => {
    setTaskList(taskList.map((taskItem) => taskItem.id === task.id ? task : taskItem));
  };


  return (
      <TaskContext.Provider value={{
        addTask,
        removeTask,
        editTask,
        taskList,
        editingItemId,
        setEditingItemId: (editingItemIndex) => {
          setEditingItemId(editingItemIndex);
        }
      }}>{children}</TaskContext.Provider>
  );
};