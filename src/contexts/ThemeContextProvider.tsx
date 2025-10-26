import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

/*
    true : light theme
    false : dark theme
*/

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme,setTheme] = useState(true);
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}