import { PageLayout } from "../../shared/layout/page-layout/PageLayout";
import AboutStyles from "./About.module.css";

export const About = () => {
  return (
    <PageLayout title="Sobre">
      <div className={AboutStyles.aboutContainer}>
        <p>
          Este projeto é uma aplicação <strong>To-Do List</strong> desenvolvida
          com foco em produtividade e boas práticas de código. Ele foi construído
          utilizando <strong>React.js</strong> com <strong>TypeScript</strong>,
          garantindo um ambiente de desenvolvimento tipado, seguro e escalável.
        </p>
        <p>
          Para simular a comunicação com uma API real, o projeto utiliza o
          <strong>MirageJS</strong> — uma poderosa biblioteca que permite criar um <em>servidor mockado</em> diretamente no front-end. Isso torna possível
          testar rotas, requisições e estados de forma totalmente isolada do
          backend, agilizando o desenvolvimento e o processo de prototipagem.
        </p>
        <p>
          As requisições HTTP são realizadas através do <strong>Axios</strong>,
          que oferece uma interface simples e eficiente para comunicação entre o
          cliente e o servidor simulado. Assim, todas as ações da lista — como
          adicionar, concluir ou remover tarefas — seguem o mesmo fluxo que uma
          aplicação real.
        </p>
        <p>
          O objetivo deste projeto é demonstrar como unir ferramentas modernas do
          ecossistema React pode resultar em uma aplicação fluida, bem estruturada
          e fácil de manter.
        </p>
        <p className={AboutStyles.techs}>
          ✨ Tecnologias utilizadas: React.js · TypeScript · MirageJS · Axios
        </p>
      </div>
    </PageLayout>
  );
};
