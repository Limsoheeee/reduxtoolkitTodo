import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, sortCard } from "./slice/todoSlice";
import todoSlice from "./slice/todoSlice";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import List from "./components/List"

const StBox = styled.div`
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  text-align: left;
  padding: 20px;
`;

function TodoList() {
  const ToDoList = useSelector((state) => state.todo.toDoList);
  console.log(ToDoList);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDoneList,setIsDoneList]=useState([]);
  const [isNotDoneList,setIsNotDoneList]=useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };
  const handleSubmit = () => {
    const card ={title:title, content:content, isDone: false, id: uuidv4() };
    dispatch(addCard(card));
    setTitle("");
    setContent("");
  };

  useEffect(()=>{
    dispatch(sortCard());
  },[dispatch,ToDoList]);

  return (
    <div>
    <div>
      <StBox>TODO LIST</StBox>
      <h4>
        제목:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => onChangeHandler(e)}
        />
        내용:
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => onChangeHandler(e)}
        />
        <button onClick={handleSubmit}>추가</button>
      </h4>    
    </div>
    <List />
    </div>
  );
}

export default TodoList;
