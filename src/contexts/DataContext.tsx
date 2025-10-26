import { createContext } from "react";
import type { DataContextType } from "../types";

export const DataContext = createContext<DataContextType>({
    filter: 0,
    setFilter: () => {},
    data: [],
    setData: () => {}
});