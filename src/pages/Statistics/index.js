import React, { useMemo } from "react";
import { View, BtnHome } from '../styles'
import { useItems } from "../../hooks/useItems";
import { Header } from '../../components/Header';

export const Statistics = () => {
  const { items } = useItems();
  const itemsSize = React.useMemo(() => items.length, [items]);
  const itemsFormatted = useMemo(
    () =>
      items.map((product) => ({
        ...product,
      })),
    [items]
  );

  const total = useMemo(
    () =>
      items.reduce((sumTotal, product) => {
        return sumTotal * product.amount;
      }, 0),
    [items]
  );


  return (
    <>
      <View>
        <Header title="Estatísticas" />
        <table style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Nome | </th>
              <th>Votos | </th>
              <th>Votantes: {itemsSize}</th>
            </tr>
          </thead>
          <tbody>
            {itemsFormatted.map((product) => (
              <tr key={product.id} data-testid="product">
                <td>
                  {product.nome}
                </td>
                <td>
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <BtnHome
          to="/"
        >
          Home
        </BtnHome>

    </View>
    </>
  )
}
