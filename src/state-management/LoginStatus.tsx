import { useReducer, useState } from "react";
import loginReducer from "./reducers/loginReducer";

const LoginStatus = () => {
  const [value, dispatch] = useReducer(loginReducer, "");

  if (value)
    return (
      <>
        <div>
          <span className="mx-2">{value}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", username: "Paul" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
