import styles from "./Details.module.css";
import { useParams, useSearchParams } from "react-router";

export const Details = () => {
  const { id } = useParams(); // passamos o parâmetro da rota
  const [searchParams] = useSearchParams(); // retorna um URLSearchParams com os parâmetros da URL

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.header}>
        <h1>📝 Detalhes da Tarefa {id} {searchParams.get('filter')} </h1>
        <span className={styles.subtitle}>
          Informações e descrição completa da tarefa selecionada.
        </span>
      </div>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab optio
          enim accusantium excepturi modi nobis. Nobis amet ipsum officiis,
          voluptatem inventore, laudantium illum tempore culpa, autem corporis
          in beatae nisi.
        </p>
      </div>
    </div>
  );
};
