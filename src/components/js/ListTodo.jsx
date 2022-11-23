import React, { useState } from "react";
import ListTodoStyle from "../css/ListTodo.module.css";

const ListTodo = (props) => {
  const [deletedData, setDeletedData] = useState(props.todoListData);
  const onDeletTodoHandler = (e) => {
    e.preventDefault();
    console.log("btn clicked");
    props.todoListData.map((items) => {
      if (items.text === e.target.textContent) {
        const indexValue = props.todoListData.indexOf(items);
        console.log(indexValue);
        setDeletedData(props.todoListData.splice(indexValue, 1));
      }
    });
  };

  return (
    <>
      {props.todoListData.map((datas) => {
        return (
          <div key={datas.id}>
            <div onClick={onDeletTodoHandler} className={ListTodoStyle.main}>
              <div className={ListTodoStyle.main__container}>
                <h1>{datas.text}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListTodo;
