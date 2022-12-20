import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../helpers/useFetch";

const TodoList = ({ list = [] }) => {
  const [remoteId, setRemoveId] = useState('')
  const deleteItem = (id) => {
    setRemoveId(id)
    axios.delete(`https://todolist-6849d-default-rtdb.firebaseio.com/todo/${id}.json`)
  }
  // const {} = useFetch(`https://todolist-6849d-default-rtdb.firebaseio.com/todo/${remoteId}.json`, 'DELETE')




  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
           {item.body} <button onClick={() => deleteItem(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
