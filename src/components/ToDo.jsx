import React from "react";
import TodoList from "../TodoList";
import { useDispatch } from "react-redux";
import { delCard, changeIsDone, changeIsNotDone } from "../slice/todoSlice";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const { title, content, isDone, id } = item;

  const handleDelete = (id) => {
    dispatch(delCard(id));
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>삭제</button>
      {isDone? (
        <button
          onClick={() => 
            dispatch(changeIsNotDone(id))
          }
        >
          미완료
        </button>
      ) : (
        <button
         onClick={()=>dispatch(changeIsDone(id))}
        >완료</button>
      )}
    </div>
  );
};

export default ToDo;
