import { useContext, type JSX } from "react";
import { DataContext } from "../contexts/DataContext";

export const Extension = ({
  id,
  name,
  description,
  logo,
  isActive,
}: {
  id: string;
  name: string;
  description: string;
  logo: JSX.Element;
  isActive: boolean;
}) => {
  const { setData } = useContext(DataContext);

  const switchState = (event : React.MouseEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).blur();
    setData((prevData) =>
      prevData.map((e) => (e.id === id ? { ...e, isActive: !e.isActive } : e))
    );
  };

  const remove = () => {
    setData((prevData) => prevData.filter((e) => e.id !== id));
  };

  return (
    <div key={id} className="extension">
      <div className="info">
        {logo}
        <div className="description">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="manage">
        <button onClick={remove}>remove</button>
        <label className="switch">
          <input onClick={switchState} type="checkbox" checked={isActive} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
