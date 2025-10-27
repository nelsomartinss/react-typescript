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
    <li key={id}>
      <span>
        {label}
        {complete ? " (concluído)" : ""}
      </span>
      <button onClick={() => onFinish(id, complete)}>Concluir</button>
      <button onClick={() => onDelete(id)}>Remover</button>
    </li>
  );
};
