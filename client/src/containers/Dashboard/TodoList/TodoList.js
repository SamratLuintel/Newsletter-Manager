import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import TaskCard from "./TaskCard/TaskCard";

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem text="Finish Account Setup" />
      <TodoListItem text="Create A Campaign" incomplete />
      <TaskCard link="/campaigns" text="Create a Campaign" />
      <TodoListItem text="Start Designing your first email" incomplete />
      <TaskCard link="/templates" text="Create a Template" />
      <TodoListItem text="Send your first email" incomplete />
    </div>
  );
};

export default TodoList;
