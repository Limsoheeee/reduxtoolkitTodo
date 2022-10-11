import React from "react";
import ToDo from "./ToDo";
import { useSelector } from "react-redux";

const List = () => {
    const isDoneList = useSelector((state) => state.todo.isDoneList);
    const isNotDoneList = useSelector((state) => state.todo.isNotDoneList);
  return (
    <div>
      <div>
        <h1>IsDone</h1>
        {isDoneList.map((item)=>{
            return(       
                <ToDo item={item} key={item.id} />          
            )
        })}
      </div>
      <div>
        <h1>IsNotDone</h1>
        {isNotDoneList.map((item)=>{
            return(       
                <ToDo item={item} key={item.id} />             
            )
        })}
      </div>
    </div>
  );
};

export default List;
