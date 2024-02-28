import "../App.css"
import React from "react";
// import { RemoveInp, To_Do } from "./To_Do";
// import { To_Do_Component } from "../components/To_Do_Component";
import TodoApp from '../pages/TodoApp';

export const Dashboard = () => {
  const getDataHandle = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn", isLoggedIn);
  };
  return (
    <>

      <TodoApp />
    </>
  );
};


