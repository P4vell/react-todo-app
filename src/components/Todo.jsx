import { useState } from "react";
import deleteIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

const Todo = ({ content, toggleTodo, todoId, removeTodo, completed }) => {
  const [active, setActive] = useState(completed);

  const handleToggleTodo = () => {
    toggleTodo(todoId);
    setActive((prevState) => !prevState);
  };

  const handleRemoveTodo = () => {
    removeTodo(todoId);
  };

  return (
    <div className="bg-secondary min-h-14 flex items-center justify-between p-4 border-b border-primary first:rounded-t-md">
      <div className="flex items-center">
        <div className="mr-4 w-6 aspect-square relative flex justify-center items-center">
          <input
            type="checkbox"
            className="w-full h-full appearance-none border border-primary rounded-full checked:bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]"
            onChange={handleToggleTodo}
            checked={active}
          />
          {active ? (
            <img
              src={checkIcon}
              alt="/"
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
          ) : null}
        </div>
        <p
          className={
            active
              ? "text-secondary text-md line-through break-all"
              : "text-primary text-md break-all"
          }
        >
          {content}
        </p>
      </div>
      <button onClick={handleRemoveTodo}>
        <img src={deleteIcon} alt="/" />
      </button>
    </div>
  );
};

export default Todo;
