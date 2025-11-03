import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/NotFound/NotFound";
import { Details } from "./pages/Details/Details";
import { Login } from "./pages/Login/Login";

export const App = () => {
  const isAuthenticated = false; // alterar para true para testar as rotas autenticadas
  return (
    <BrowserRouter>
      {/* se estiver autentivado */}
      {isAuthenticated && (
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/detalhes/:id" element={<Details />} />{" "}
            {/* Rota com parametro id do useParams*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      )}
      {/* se não estiver autentivado */}
      {!isAuthenticated && (
        <AppLayout>
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </AppLayout>
      )}
    </BrowserRouter>
  );
};
