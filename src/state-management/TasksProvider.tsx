import React, { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContexts";
import tasksReducer from "./reducers/tasksReducer";

interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
