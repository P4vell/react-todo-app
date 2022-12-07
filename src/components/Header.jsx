import { useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";
import bgDekstopLight from "../assets/images/bg-desktop-light.jpg";
import bgDekstopDark from "../assets/images/bg-desktop-dark.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";
import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

const Header = ({ setTodos, todos }) => {
  const { theme, setTheme } = useThemeContext();
  const inputRef = useRef();

  const isDark = theme === "dark";

  const changeTheme = () => {
    isDark ? setTheme("light") : setTheme("dark");
  };

  const addTodo = (e) => {
    e.preventDefault();
    const content = inputRef.current.value;
    if (inputRef.current.value.trim() === "") return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random(),
          content: content,
          completed: false,
        },
      ];
    });
    inputRef.current.value = "";
  };

  return (
    <header className="w-full relative flex flex-col items-center">
      {isDark ? (
        <picture className="w-full absolute">
          <source media="(min-width:800px)" srcSet={bgDekstopDark} />
          <img
            src={bgMobileDark}
            alt="/"
            className="w-full h-full object-cover"
          />
        </picture>
      ) : (
        <picture className="w-full absolute">
          <source media="(min-width:800px)" srcSet={bgDekstopLight} />
          <img
            src={bgMobileLight}
            alt="/"
            className="w-full h-full object-cover"
          />
        </picture>
      )}

      <div className="relative z-10 w-full max-w-[1000px] px-6 pt-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-white tracking-widest font-semibold">
            TODO
          </h1>
          <button onClick={changeTheme}>
            {isDark ? (
              <img src={sunIcon} alt="/" />
            ) : (
              <img src={moonIcon} alt="/" />
            )}
          </button>
        </div>
        <form
          className="w-full h-14 bg-primary rounded overflow-hidden mt-6 relative"
          onSubmit={addTodo}
        >
          <div className="w-6 h-6 border border-primary rounded-full absolute left-4 top-[50%] translate-y-[-50%]"></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full h-full bg-secondary pl-14 placeholder:text-sm"
            ref={inputRef}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
