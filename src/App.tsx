import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext.tsx";
import { Header } from "./Components/Header.tsx";
import { FilterBar } from "./Components/FilterBar.tsx";
import { DataContextProvider } from "./contexts/DataContextProvider.tsx";
import { Extensions } from "./Components/Extensions.tsx";

export const App = () => {


  const { theme } = useContext(ThemeContext);

  return (
      <div className={`root_inner ${theme ? "light" : "dark"}`}>
        <Header />
        <DataContextProvider>
          <FilterBar />
          <Extensions />
        </DataContextProvider>
      </div>
  );
};

export default App;
