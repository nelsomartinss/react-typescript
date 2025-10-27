import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void; // evento
}
export const InputAdd = (props: IInputAddProps) => {
  {
    /* adicionando props ao InputAdd */
  }
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          props.onAdd(value);
          {
            /* executando props antes de limpar o valor */
          }
          setValue("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
