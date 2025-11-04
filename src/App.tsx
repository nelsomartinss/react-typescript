import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./shared/layout/AppLayout";
import { NotFound } from "./pages/NotFound/NotFound";
import { Details } from "./pages/Details/Details";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <BrowserRouter basename="/toDoList">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
