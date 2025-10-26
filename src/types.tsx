import type { JSX } from "react";


export interface ThemeContextType {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ExtensionType {
    id: string;
    name: string;
    description: string;
    logo: JSX.Element;
    isActive: boolean;
}

export interface DataContextType {
    filter: 0 | 1 | 2;
    setFilter: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
    data : ExtensionType[];
    setData : React.Dispatch<React.SetStateAction<ExtensionType[]>>;
}