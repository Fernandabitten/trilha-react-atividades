import { useContext } from "react";
import { MyContext } from "../../context/context";
import Product from "../../componentes/Product/Product";
import Layout from "../../componentes/Layoute/Layout";
import Button from "../../componentes/UI/Button/Button";
import {
  ContainerCheckout,
  CheckoutStyled,
  CardStyled,
  Count,
  CartItems,
} from "./CheckoutPaje.styled";
import "./checkout.css";

/**
 *5.1.[ok] remover itens de um pedido;
 *5.2.[ok] confirmar o pedido;
 *5.3.[ok] visualizar o total do pedido.
 */

export default function Checkout({ item }) {
  const { cartItems, totalPurchase, setCartItems } = useContext(MyContext);
  const sun = totalPurchase.toFixed(2);
  const purchaseHistory = JSON.parse(
    localStorage.getItem("purchaseHistory") || "[]"
  );

  const doCheckout = () => {
    const newPuchese = {     
      dates: new Date(),
      items: cartItems,
    };
    purchaseHistory.push(newPuchese);
    localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));

    setCartItems([]);
    localStorage.setItem("cartList", []);
  };

  const itemOrItens = cartItems.length <= 1 ? "item" : "itens";

  return (
    <Layout>
      <ContainerCheckout>
        <CheckoutStyled>
          <h1>CHECKOUT</h1>
          <Count>
            {cartItems.length} {itemOrItens} no carrinho
          </Count>
          <ul className="products">
            {cartItems.map((item, key) => (
              <li  key={key} className="row">
                <Product
                  key={item}
                  item={item}
                  itemName={item.title}
                  idItem={item.id}                 
                />
              </li>
            ))}
          </ul>
        </CheckoutStyled>

        <CardStyled>
          <div>
            <h1>TOTAL DO CARRINHO</h1>
            <ul className="product">
              {cartItems.map((item) => (
                <li className="row">
                  <CartItems>
                    <spam>{item.title}</spam>{" "}
                    <spam>R$ {(item.vote_average * 10).toFixed(2)}</spam>
                  </CartItems>
                </li>
              ))}
            </ul>
            <br />
            <h2> R$ {sun} </h2>

            <Button
              component="button"
              onClick={doCheckout}
              theme="contained-checkout"
            >
              Confirmar pedido
            </Button>
          </div>
        </CardStyled>
      </ContainerCheckout>
    </Layout>
  );
}
