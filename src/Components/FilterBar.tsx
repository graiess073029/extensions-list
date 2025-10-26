import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const FilterBar = () => {


  const { filter, setFilter } = useContext(DataContext);

  const changeFilter = (event : React.MouseEvent<HTMLButtonElement>) => {
    (event.target as HTMLButtonElement).blur();
    setFilter(parseInt((event.target as HTMLButtonElement).value) as 0 | 1 | 2);
  }

  return (
    <div className="filterBar">
      <h1>extensions list</h1>
      <ul className="filters">
        <li className={filter === 0 ? "active" : ""}>
          <button value={0} onClick={changeFilter}>
            all
          </button>
        </li>
        <li className={filter === 1 ? "active" : ""}>
          <button value={1} onClick={changeFilter}>
            active
          </button>
        </li>
        <li className={filter === 2 ? "active" : ""}>
          <button value={2} onClick={changeFilter}>
            inactive
          </button>
        </li>
      </ul>
    </div>
  );
};
