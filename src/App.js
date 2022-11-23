import React, { useState } from "react";
import Card from "../src/components/js/Card";
import MainContent from "./components/js/MainContent";
import TodoData from "./components/Data/data";
function App() {
  const [newTodoListData, setNewTodoListData] = useState(TodoData);
  const onAddTodoListDatas = (newTodoDatas) => {
    setNewTodoListData((prev) => {
      return [newTodoDatas, ...prev];
    });
  };

  return (
    <>
      <Card AddTodoList={onAddTodoListDatas} />
      <MainContent key={newTodoListData.id} UpdateTodoData={newTodoListData} />
    </>
  );
}

export default App;
