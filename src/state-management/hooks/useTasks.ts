import { useContext } from "react";
import TasksContext from "../contexts/tasksContexts";

const useTasks = () => useContext(TasksContext);

export default useTasks;
