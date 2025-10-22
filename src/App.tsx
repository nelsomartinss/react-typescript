import { useState } from "react";

export function App() {
  return (
    <>
      <h1>Olá!</h1>
    </>
  );
}

// função js
const soma = () => {
  return 2 + 2;
};
soma();

// react hook
const useSoma = () => {
  const [soma] = useState(2 + 2);
  return soma;
};
useSoma();

// componente react funcional
export function ComponenteFuncional() {
  return <h2>Componente Funcional</h2>;
}
// componentes nativos do react usam letra minuscula, mas nome de componentes personalizados usam letra maiuscula e retornam html (jsx)
