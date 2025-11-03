import { NavLink } from "react-router";
import NotFoundStyles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={NotFoundStyles.notFoundContainer}>
      <h1 className={NotFoundStyles.code}>404</h1>
      <p className={NotFoundStyles.message}>
        Ops! A página que você tentou acessar não foi encontrada.
      </p>
      <NavLink to="/" className={NotFoundStyles.backLink}>
        ⬅ Voltar para a página inicial
      </NavLink>
    </div>
  );
};
