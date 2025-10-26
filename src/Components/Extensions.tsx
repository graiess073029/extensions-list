import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Extension } from "./Extension";

export const Extensions = () => {

    const {data,filter} = useContext(DataContext);

    const filteredData = data.filter(extension => {
        if (filter === 0) return true;
        if (filter === 1) return extension.isActive;
        if (filter === 2) return !extension.isActive;
        return true;
    });

    return(
        <div className="extensions">
            {
                filteredData.map(extension => (
                    <Extension id={extension.id} name={extension.name} description={extension.description} logo={extension.logo} isActive={extension.isActive} />
                )
            )
            }
        </div>
    )

}