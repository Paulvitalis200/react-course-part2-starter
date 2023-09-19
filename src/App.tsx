import { useReducer } from "react";
import "./App.css";
import AuthContext from "./state-management/contexts/authContexts";
import TasksContext from "./state-management/contexts/tasksContexts";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import loginReducer from "./state-management/reducers/loginReducer";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, loginDispatch] = useReducer(loginReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch: loginDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
