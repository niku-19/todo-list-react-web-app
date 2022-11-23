import React from "react";
import ListTodo from "./ListTodo";
import MainContentStyle from "../css/MainContent.module.css";
const MainContent = (props) => {
  return (
    <>
      <h1 align="center" className={MainContentStyle.heading}>
        Your Todo List
      </h1>
      <div className={MainContentStyle.grid}>
        <ListTodo
          key={props.UpdateTodoData.id}
          todoListData={props.UpdateTodoData}
        />
      </div>
    </>
  );
};

export default MainContent;
