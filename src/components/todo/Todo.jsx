import React, { useEffect, useState } from "react";
import { useDebounce } from "../../helpers/useDebounce";
import useFetch from "../../helpers/useFetch";
import TodoList from "../todo_list/TodoList";

const Todo = () => {
  const [post, setPost] = useState({});
  const [list, setList] = useState([]);

  const [formData, setFormData] = useState("");

  const { error, isLoading } = useFetch(
    "https://todolist-6849d-default-rtdb.firebaseio.com/todo.json",
    "POST",
    post
  );

  const getTodoDataHandler = (e) => {
    e.preventDefault();
  };
  const { data, fetchHandler } = useFetch(
    "https://todolist-6849d-default-rtdb.firebaseio.com/todo.json"
  );

  useEffect(() => {
    setList(data);
  }, [post, data, setList]);

  const makeRequest = useDebounce(() => {
    setPost(formData);
    fetchHandler();
    setFormData("");
  }, 1000);

  const changeFormDataHandler = (e) => {
    const { value } = e.target;
    setFormData(value);
    makeRequest(value);
  };

  return (
    <div>
      <form onSubmit={getTodoDataHandler}>
        <input type="text" value={formData} onChange={changeFormDataHandler} />
      </form>
      <TodoList list={list} />
    </div>
  );
};

export default Todo;
