import { useState } from "react";
import InputAddStyles from './InputAdd.module.css';


interface IInputAddProps {
  onAdd(value: string): void;
}
export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
  };
  return (
    <div className={InputAddStyles.container}>
      <input
        className={InputAddStyles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={InputAddStyles.button} onClick={handleAdd}>Adicionar</button>
    </div>
  );
};
