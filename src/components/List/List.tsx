import ListStyles from './List.module.css';

export const List = ({ children }: React.PropsWithChildren) => {
  return (
    <ol className={ListStyles.list}>
     {children}
    </ol>
  );
}