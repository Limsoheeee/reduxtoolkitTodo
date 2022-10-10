import React from "react";
import TodoList from "../TodoList";
import { useDispatch } from "react-redux";
import { delCard } from "../slice/todoSlice";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const { title, content, isDone, id } = item;

  const handleDelete = (id)=>{
    dispatch(delCard(id))
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>handleDelete(id)}>삭제</button>
      <button>완료</button>
    </div>
  );
};

export default ToDo;
