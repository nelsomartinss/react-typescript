import { useState } from "react";

export function App() {
  const [hide, setHide] = useState(false); // o valor de hide é falso, então enquanto hide for falso a mensagem que aparece é "Não clicou!". Se clicarmos o hide muda para true e a mensagem passa a ser "Clicou!"
  return (
    <>
      <button onClick={() => setHide(!hide)}>Clique aqui!</button>
      {hide ? <p>Clicou!</p> : <p>Não clicou!</p>}
    </>
  );
}
