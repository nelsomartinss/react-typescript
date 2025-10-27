import { useState } from "react";
import { InputAdd } from "./components/ImputAdd";

export function App() {
  const [list, setList] = useState([
    { id: "1", label: "fazer café", complete: false },
    { id: "2", label: "estudar react", complete: false },
    { id: "3", label: "ir ao mercado", complete: false },
  ]);

  return (
    <div>
      <InputAdd
        onAdd={(value) => 
          setList([
            ...list,
            { id: (list.length + 1).toString(), complete: false, label: value }, 
          ]) // esse evento recebe o value do InputAdd
        } // esse evento é a mesma coisa que um onClick do btn 
      />

      {/* isso acontece quando clicamos nesse botão */}
      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}
            {listItem.complete ? " (concluído)" : ""}
            <button
              onClick={() =>
                setList([
                  ...list.map((item) => ({
                    ...item,
                    complete: item.id === listItem.id ? true : item.complete,
                  })),
                ])
              }
            >
              Concluir
            </button>{" "}
            {/* o map percorre toda uma array, dentro desse map o item percorre toda a array e cria uma array que recebe todos os itens da array, todo item que tiver o mesmo id do listItem ele marca como true, se não tiver o mesmo id ele marca como false */}
            <button
              onClick={() =>
                setList([...list.filter((item) => item.id !== listItem.id)])
              }
            >
              Remover
            </button>{" "}
            {/* Esse botão cria uma nova array que recebe a lista inteira e filtra cada item, dentro tem uma condição, se o item que esse botão que está sendo clicado for diferente do item da lista não é removido, ou seja, o item sempre é igual por isso é removido, ele cria uma array apenas com os itens */}
          </li>
        ))}
      </ol>
    </div>
  );
}
