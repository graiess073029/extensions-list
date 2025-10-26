import { useState } from "react";
import { DataContext } from "./DataContext.tsx";
import type { ExtensionType } from "../types.tsx";
import { data as importedData } from "../assets/data.tsx";

/*
    0 : all
    1 : active
    2 : inactive
*/

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [filter,setFilter] = useState<0 | 1 | 2>(0);
    const [data,setData] = useState<ExtensionType[]>(importedData);
    return (
        <DataContext.Provider value={{filter,setFilter,data,setData}}>
            {children}
        </DataContext.Provider>
    );
}