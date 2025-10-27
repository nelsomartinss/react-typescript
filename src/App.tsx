import { useState } from "react";
import { InputAdd } from "./components/ImputAdd";
import { TodoItem } from "./components/TodoItem";

export function App() {
  const [list, setList] = useState([
    {id: '1', label: 'Estudar React', complete: false},
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: String(list.length + 1), label: value, complete: false },
    ]);
  };

  const handleDelete = (id: string) => {
    setList([...list.filter((item) => item.id !== id)]);
  }; // essa função filtra os itens que tem o mesmo id do item clicado em remover, ou seja, remove o item da lista, se o item for diferente do id clicado ele permanece na lista, mas isso não ocorre por que o item é removido, ou seja, é uma lista vazia

  const handleFinish = (id: string) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, complete: true } : item
      )
    );
  }; // essa função cria uma nova lista com o item atualizado quando clicado em concluir, ou seja, o que for true permanece true e o que for false vira true quando clicado no botão concluir

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <ol>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            label={item.label}
            complete={item.complete}
            onDelete={handleDelete}
            onFinish={handleFinish}
          />
        ))} {/* passandos as props */}
      </ol>
    </div>
  );
}
