import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";

export const App = () => {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
};
