import { useRef, useState } from "react";
import InputAddStyles from './InputAdd.module.css';


interface IInputAddProps {
  onAdd(value: string): void;
}
export const InputAdd = (props: IInputAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null); // usamos o useRef para criar uma referência ao input
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
    inputRef.current?.focus(); // usando o focus para manter o cursor no input após adicionar, isso advém da referência do useRef
  };
  return (
    <div className={InputAddStyles.container}>
      <input
        className={InputAddStyles.input}
        ref={inputRef} 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> {/* usamos o ref para pegar a referência do input */}
      <button className={InputAddStyles.button} onClick={handleAdd}>Adicionar</button>
    </div>
  );
};
