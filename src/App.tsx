
// criando propriedades para esse card
interface ICardProps {
  title: string;
  children: React.ReactNode; // com isso podemos colocar elementos filhos dentro do card
}

// componente criado
const Card = (props: ICardProps) => {
  return (
    <div style={{border:'1px solid red'}}>
      <h2>{props.title}</h2>
      <div>
        {props.children} {/* essa div pode receber um filho agora */}
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
      <h1>Olá!</h1>
      <p>card:</p>
      <Card title='testando'>
        <p>Testando</p> {/* filhos */}
      </Card>
    </>
  );
}
