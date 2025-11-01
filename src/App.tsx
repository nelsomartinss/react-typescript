import { useEffect, useState } from "react";
import { InputAdd } from "./components/ImputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import { TodoAPI, type ITodo } from "./shared/services/api/TodoAPI";

export function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const todos = await TodoAPI.getAll();
        setList(todos);
      } catch (error) {
        console.log("Erro ao buscar todos:", error);
      }
    }

    fetchData();
  }, []);

  const handleAdd = async (value: string) => {
    if (!value.trim()) return;

    try {
      await TodoAPI.create({ label: value, complete: false });
      setList([
        ...list,
        { id: String(list.length + 1), label: value, complete: false },
      ]);
    } catch (error) {
      console.error("Erro ao criar:", error);
    }
  };

  const handleFinish = async (id: string) => {
    try {
      await TodoAPI.update(id, { complete: true });
      setList(
        list.map((item) =>
          item.id === id ? { ...item, complete: true } : item
        )
      );
    } catch (error) {
      console.log("Erro ao atualizar:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await TodoAPI.delete(id);
      setList([...list.filter((item) => item.id !== id)]);
    } catch (error) {
      console.log("Erro ao deletar:", error);
    }
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onDelete={handleDelete}
            onFinish={handleFinish}
          />
        ))}
      </List>
    </div>
  );
}
