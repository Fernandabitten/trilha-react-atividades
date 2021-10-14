import React, { useEffect, useState } from "react";

// criando o contexto
export const MyContext = React.createContext({
  cartItems: [],
  user: null,
});

//providenciando o contexto
export function MyProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartList") || "[]")
  );

  const [totalPurchase, setTotalPurchase] = useState(
    JSON.parse(localStorage.getItem("purchasesCart") || 1)
  );

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItems));
    localStorage.setItem("purchasesCart", JSON.stringify(totalPurchase));

  }, [cartItems, totalPurchase]);

  const loginUser = (loginValues) => {
    localStorage.setItem("login", JSON.stringify(loginValues));
    setIsLogged(true);
  };

   const addItemToCart = (item) => {
    setCartItems((prevState) => {
      //se um produto(item) com mesmo Id for encontrado, ele não é adicionado a lista
      if (prevState.find((product) => product.id === item.id)) {
        return prevState;
      }
      return prevState.concat(item);
    });
  };

  const deleteItemFromCart = (id) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => {
        return item.id !== id;
      });
    });
  };

  useEffect(() => {
    purchase();
  });

  const purchase = () => {  
    setTotalPurchase((prevState) => {
      return cartItems.reduce((currentValue, nextItem) => {
        return currentValue + nextItem.vote_average * 10;
      }, 0);
    });
  };

  const jsonLog = localStorage.getItem("login");
  const log = JSON.parse(jsonLog);

  return (
    <MyContext.Provider
      value={{
        cartItems,
        setCartItems,
        usuario: null,
        addItemToCart,
        deleteItemFromCart,
        purchase,
        loginUser,
        isLogged,
        setIsLogged,
        totalPurchase,    
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
