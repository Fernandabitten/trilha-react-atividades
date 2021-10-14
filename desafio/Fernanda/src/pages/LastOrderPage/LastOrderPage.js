import React from "react";
import Layout from "../../componentes/Layoute/Layout";
import Accordion from "../../componentes/Accordion/Accordionn";
import { ContainerCheckout } from "./LastOrderPage.styled";

/**
 * [ok] visualizar os últimos pedidos.
 */

export default function UltimosPedidos() {
  const purchaseHistory = JSON.parse(      
    localStorage.getItem("purchaseHistory") || "[]"
  );

  return (
    <Layout>
      <ContainerCheckout>
        <div>
          <h1>Últimos Compras</h1>
          <br />
          {purchaseHistory.map((purchase, key) => (
            <>
              <Accordion purchase={purchase} key={key} />{" "}
            </>
          ))}
        </div>
      </ContainerCheckout>
    </Layout>
  );
}
