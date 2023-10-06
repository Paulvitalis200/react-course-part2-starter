import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error);
  console.log(error);
  return (
    <>
      <h1>Oops...</h1>
      <p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}</p>
    </>
  );
};

export default ErrorPage;
