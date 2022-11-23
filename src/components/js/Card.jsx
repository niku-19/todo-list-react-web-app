import React, { useState } from "react";
import CardStyle from "../css/Card.module.css";

const Card = (props) => {
  const [onInput, setOnInput] = useState("");
  const onInputHandler = (e) => {
    e.preventDefault();
    setOnInput(e.target.value);
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    const addTodoList = {
      text: onInput,
      id: Math.floor(Math.random() * 20) + 6,
    };
    props.AddTodoList(addTodoList);
    setOnInput("");
  };

  return (
    <>
      <div className={CardStyle.main}>
        <div className={CardStyle.main__container}>
          <form onSubmit={onSubmitFormHandler} action="addTodoList">
            <div className={CardStyle.todoListTitle}>
              <label htmlFor="todoList">Add Todo List</label>
            </div>
            <div className={CardStyle.input__todo}>
              <input
                value={onInput}
                type="text"
                max={100}
                onChange={onInputHandler}
              />
            </div>
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
