import React from "react";
import Check from "./Check";
import { MdRemoveCircle } from "react-icons/md";

const TodoItems = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
    >
      <button className="flex items-center"  onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : ""}>
          {todo.title}
        </span>
      </button>
      <button onClick={()=> removeTodo(todo.id)}>
        <MdRemoveCircle
          size={22}
          className="text-pink-500 hover:text-pink-700 transition-colors ease-linear duration-200"
        />
      </button>
    </div>
  );
};

export default TodoItems;
