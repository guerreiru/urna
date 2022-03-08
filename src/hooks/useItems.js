import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const ItemsContext = createContext({});

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storagedItems = localStorage.getItem('@ProjetoUrna:items');

    if (storagedItems) {
      return JSON.parse(storagedItems);
    }
    return [];
  });

  const addProduct = (item) => {

    const updatedItems = [...items];
    const productExists = updatedItems.find(
      product => product.id === item.id
    );

    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (productExists) {
      productExists.amount = amount;
    } else {
      const newProduct = {
        ...item,
        amount: 1,
      };
      console.log("newProduct", newProduct)
      updatedItems.push(newProduct);
    }

    setItems(updatedItems);
    localStorage.setItem('@ProjetoUrna:items', JSON.stringify(updatedItems));
  };

  const removeProduct = (product) => {
    try {
      const updatedItems = [...items];
      const productIndex = updatedItems.findIndex(
        prod => prod.id === product.id
      );

      if (productIndex >= 0) {
        updatedItems.splice(productIndex, 1);
        setItems(updatedItems);
        localStorage.setItem('@ProjetoUrna:items', JSON.stringify(updatedItems));
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedItems = [...items];
      const searchedProduct = updatedItems.find(
        product => product.id === productId
      );

      if (searchedProduct) {
        searchedProduct.amount = amount;
        setItems(updatedItems);
        localStorage.setItem('@ProjetoUrna:items', JSON.stringify(updatedItems));
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <ItemsContext.Provider
      value={{ items, setItems, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);

  return context;
}