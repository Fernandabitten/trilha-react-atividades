import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import {
  AccordionStyled,
  Button,
  AccordionBoxItems,
  AccordionPainel,
  AcordionItem,
  ImgStyled,
  InfoItemStyled,
} from "./Accordion.styled";

function Accordion({ purchase, key }) {
  const { addItemToCart } = useContext(MyContext);

  const totalPrice = purchase.items.reduce((currentValue, nextItem) => {
    return currentValue + nextItem.vote_average * 10;
  }, 0);
  const total = totalPrice.toFixed(2);

  function AccordionOnCLick(purchase) {
    purchase.target.classList.toggle("active");
    const accordionPanel = purchase.target.nextSibling;
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  }

  const onClickAdicionarAoCarrinho = () => {
    addItemToCart(purchase.items);
  };
  console.log(purchase.items);

  const purchaseDate = new Date(purchase.date);
  const getMonth = purchaseDate.getMonth() + 1;
  const date =
    purchaseDate.getDate() + "/" + getMonth + "/" + purchaseDate.getFullYear();
  const itemOrItens = purchase.items.length <= 1 ? "item" : "itens";

  return (
    <AccordionStyled>
      <Button onClick={AccordionOnCLick}>
        {date} - {purchase.items.length} {itemOrItens} - Total R$ {total} &emsp;
        &emsp; &darr;
      </Button>
      <AccordionPainel>
        {purchase.items.map((item, key) => {
          return (
            <AccordionBoxItems>
              <AcordionItem>
                <ImgStyled>
                  <>
                    <img
                      onClick={"irParaDetalharFilme"}
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={""}
                      key={key}
                    />
                  </>
                </ImgStyled>
                <InfoItemStyled>
                  <div >
                    <h4>{item.title}</h4>
                  </div>
                  <div>R$ {(item.vote_average * 10).toFixed(2)}</div>
                  <div>{item.overview}</div>
                </InfoItemStyled>
              </AcordionItem>
            </AccordionBoxItems>
          );
        })}
        <Button
          size="small"
          color="secondary"
          onClick={onClickAdicionarAoCarrinho}
          style={{
            color: "#fff",
            textAlign: "center",
            backgroundColor: "#D3840B",
            fontWeight: "bold",
            fontSize: "100%",
           
          }}
        >
          Comprar de novo
        </Button>
      </AccordionPainel>
    </AccordionStyled>
  );
}

export default Accordion;
