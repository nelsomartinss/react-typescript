import TodoItemStyles from "./TodoItem.module.css";

interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;
  onDelete(id: string): void;
  onFinish(id: string, complete: boolean): void;
}
export const TodoItem = ({
  id,
  label,
  complete,
  onDelete,
  onFinish,
}: ITodoItemProps) => {
  return (
    <li className={TodoItemStyles.todoItem} key={id}>
      <span
        className={`${TodoItemStyles.todoLabel} ${
          complete ? TodoItemStyles.complete : ""
        }`}
      >
        {label}
      </span>
      <div className={TodoItemStyles.todoButtons}>
        <button
          className={`${TodoItemStyles.todoButton} ${TodoItemStyles.finish}`}
          onClick={() => onFinish(id, complete)}
        >
          Concluir
        </button>
        <button
          className={`${TodoItemStyles.todoButton} ${TodoItemStyles.delete}`}
          onClick={() => onDelete(id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
};
