import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // To fetch data with React Query, we use useQuery(). We give it a config obj with
  // two properties. 1. queryKey. Unique identifier. Used uniquely for caching
  // Anytime we fetch data from the backend, the ddata is storedd in the cache  and
  // is accessible vvia this key. We set this key to an array  which is equal to one  or more vvalues
  // First value is often a string that ientifies the type of data we want to store
  // We can have additional  values too.  Second parameter is our queryFunction
  // Function used to fetch the data from theh backend. Returns a  Promise that resolves the data or throws an error
  // Axios GET returns a responseobject. We want to store the actual data that we get from the backend

  // We  are interested in the data that is sent  back  from axios. So  we destructure our
  // data from useQuery.
  // With these we get some advvantages. Auto Retries  if  it fails, Auto Refresh (after period), Caching (the  next time  needed, we won't go to the server. It improves performance)

  // React Query haas an property called errors for handling errors
  // When using React Query should specify the type of errors that may hhappen when fetching data
  // The first thing to  pass is  the  type of data we expect  from the backend. For example
  // Heere we expect Todo[]. The second parameter is Error.

  //Showing a loaading indictator.
  // QueryObj has isLoading

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
