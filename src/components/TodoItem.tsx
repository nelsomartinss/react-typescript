interface ITodoItemProps {
  // a propriedade key não precisa ser informada na interface o react faz isso automaticamente
  id: string;
  label: string;
  complete: boolean;
  onDelete(id: string): void;
  onFinish(id: string, complete: boolean): void;
} // um componente aceita propriedadesm que podem ser funções, objetos etc (que são as props), tudo é uma propriedade em um componente react, por convenção quando é uma função isso é chamado de evento, por isso o nome comça com 'on' ("ao acontecer algo").

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
      {/* eventos de onFinish e onDelete são executados ao clique, esses eventos foram funções passadas para a interface com seus parametros e foram passadas para o componente por desestruturação */}
    </li>
  );
};
