import { useState } from "react";
import CreateTodoField from "./createTodo/CreateTodoField";
import TodoItems from "./item/TodoItems";

const data = [
  {
    id: "ads1",
    title: "Finish the essay collabboration",
    isCompleted: false,
  },
  {
    id: "sadsad1",
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    id: "dsadas1",
    title: "Send the finished assignment",
    isCompleted: false,
  },
  {
    id: "ascas1",
    title: "Write message friends",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo for junior</h1>

      {todos.map((todo) => (
        <TodoItems
          todo={todo}
          key={todo.id}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
