import { createContext, useContext, useState } from "react";

interface IAuthContextProps {
  email: string | undefined;
  accessToken: string | undefined;

  logout(): void;
  login(email: string, password: string): void;
}

const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [email, setEmail] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();

  const logout = () => {
    console.log("Fazendo logout");
    setAccessToken(undefined);
    setEmail(undefined);
  };
  const login = (email: string, password: string) => {
    console.log("Fazendo login com", email, password);
    setEmail(email);
    // chamar API de login e pegar token (modo correto)
    setAccessToken(crypto.randomUUID());
  };
  return (
    <AuthContext.Provider value={{ email, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook personalizado, acessando contexto de autenticação de qualquer liugar
export const useAuthContext = () => {
    return useContext(AuthContext);
}

// hook personalizado, acessando se estamos autenticados ou não
export const useIsAuthenticated = () => {
    const { accessToken } = useAuthContext(); // string
    return !!accessToken; // retorna se estamos autenticados ou não
}
