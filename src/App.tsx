import { AuthProvider } from "./shared/contexts/AuthContext";
import { AppRoutes } from "./shared/Routes/Routes";

export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
