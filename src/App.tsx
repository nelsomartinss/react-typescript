import { HashRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./shared/layout/AppLayout";
import { NotFound } from "./pages/NotFound/NotFound";
import { Details } from "./pages/Details/Details";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
};
