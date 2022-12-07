import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Todo from "./components/Todo";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };

  useEffect(() => {
    const filterTodos = () => {
      switch (filter) {
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterTodos();
  }, [filter, todos]);

  return (
    <ThemeContextProvider>
      <Header setTodos={setTodos} todos={todos} />
      <div className="w-full max-w-[1000px] relative z-10 p-6 mx-auto">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            content={todo.content}
            completed={todo.completed}
            todoId={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}

        {todos.length === 0 ? (
          <div className="w-full h-14 bg-secondary rounded-t-md flex items-center justify-center border-b border-primary">
            <p className="text-primary text-md">Nothing left to do!</p>
          </div>
        ) : null}

        <div className="flex items-center justify-between bg-secondary text-secondary rounded-b-md h-14 text-sm p-6">
          <p>{filteredTodos.length} items left</p>
          <button onClick={clearCompletedTodos}>Clear Completed</button>
        </div>

        <Filters filter={filter} setFilter={setFilter} />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
