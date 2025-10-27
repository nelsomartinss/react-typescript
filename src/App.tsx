import { useState } from "react";
import { InputAdd } from "./components/ImputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";

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
