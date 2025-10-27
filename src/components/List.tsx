// poderiamos usar uma interface para definir essa única prop, porém, é nesse caso, como é apenas uma prop, podemos usar o React.PropsWithChildren, que é especifico para esse caso
export const List = ({ children }: React.PropsWithChildren) => {
  return <ol>{children}</ol>;
}; // isso não seria necessário ser componenteziado, mas é uma boa prática para manter o código organizado
