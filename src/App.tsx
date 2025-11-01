import { useState } from "react";
import { InputAdd } from "./components/ImputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import { TodoAPI } from "./shared/services/api/TodoAPI";

// READ
async function getTodos() {
  try {
    const data = await TodoAPI.get(); 
    console.log("Todos:", data); 
  } catch (error) {
    console.log("Erro ao buscar todos:", error); 
  }
}
// CREATE
async function handleCreate() {
  try {
    const data = await TodoAPI.create({ label: "", complete: false });
    console.log("Criado: ", data);
  } catch (error) {
    console.log("Erro ao criar:", error);
  }
}
// UPDATE
async function handleUpdate() {
  try {
    const data = await TodoAPI.update("1", { label: "", complete: true }); // id do todo que quero atualizar e os novos dados
    console.log("Atualizado: ", data);
  } catch (error) {
    console.log("Erro ao atualizar:", error);
  }
}
// DELETE
async function handleDelete() {
  try {
    const data = await TodoAPI.delete("1");
    console.log("Deletado: ", data);
  } catch (error) {
    console.log("Erro ao deletar:", error);
  }
}

export function App() {
  const [list, setList] = useState([
    { id: "1", label: "Estudar React", complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: String(list.length + 1), label: value, complete: false },
    ]);
  };

  const handleDelete = (id: string) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  const handleFinish = (id: string) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, complete: true } : item))
    );
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            label={item.label}
            complete={item.complete}
            onDelete={handleDelete}
            onFinish={handleFinish}
          />
        ))}
      </List>
    </div>
  );
}
