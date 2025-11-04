import { BrowserRouter, Route, Routes } from "react-router";
import { useIsAuthenticated } from "../contexts/AuthContext";
import { AppLayout } from "../layout/AppLayout";
import { Details } from "../../pages/Details/Details";
import { NotFound } from "../../pages/NotFound/NotFound";
import { About } from "../../pages/About/About";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";

export const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
      <BrowserRouter>
        {/* se estiver autentivado - ROTAS PRIVADAS */}
        {isAuthenticated && (
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/detalhes/:id" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        )}
        {/* se não estiver autentivado - ROTAS PUBLICAS */}
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
