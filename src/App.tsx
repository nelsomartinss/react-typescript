import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/NotFound/NotFound";
import { Details } from "./pages/Details/Details";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/detalhes/:id" element={<Details />} /> {/* Rota com parametro id do useParams*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
