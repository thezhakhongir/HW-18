import { createContext, useState } from "react";
import useFetch from "../helpers/useFetch";

export const TodoContext = createContext({
  todos: [],
  onSubmit: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  

  

  

  return (
    <TodoContext.Provider
      value={{ todos: "", onSubmit: () => {} }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
