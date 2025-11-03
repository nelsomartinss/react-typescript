import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/NotFound/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to='/' />} />  é outra solução */}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
