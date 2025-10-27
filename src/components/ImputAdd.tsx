import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void; // evento
}
export const InputAdd = (props: IInputAddProps) => {
  // adicionando as props ao InputAdd
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
  }; // essa função substitui tudo que estava dentro do onClick do botão

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
