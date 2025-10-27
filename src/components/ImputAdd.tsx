import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void; // evento
}
export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};
