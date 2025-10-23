import { useState } from "react";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "fazer café" },
    { id: "2", label: "estudar react" },
    { id: "3", label: "ir ao mercado" },
  ]);

  return (
    <div>
      <input
        type="text"
        value={value} // o valor é o mesmo do setValue
        onChange={(e) => setValue(e.target.value)} // se alterar o valor, a variavel 'e' guarda esse valor e passar para o setValue, ele adiciona ao setValue o valor do input (target). Evento que adiciona do input ao value
      />
      <button
        onClick={() => {
          setList([
            ...list, // o ... traz todo conteudo que ja existia na lista pra dentro do setList (novo array
            { id: (list.length + 1).toString(), label: value }, // o proximo item é o tamanho da lista +1 transformado em string, o label é o valor que estava no input
          ]);
          setValue(""); // limpa o input apos adicionar
        }}
      >
        Adicionar
      </button>{" "}
      {/* isso acontece quando clicamos nesse botão */}
      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </div>
  );
}
