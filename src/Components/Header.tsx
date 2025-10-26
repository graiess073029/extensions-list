import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import { IconMoon, IconSun, Logo } from "../svg.tsx";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = (event : React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setTheme((prev: boolean) => !prev);
  };

  return (
    <header>
      <Logo />
      <button onMouseEnter={() => console.log("hover")}  onClick={switchTheme}>
        {theme ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  );
};
