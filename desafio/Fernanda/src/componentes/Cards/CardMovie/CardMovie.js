import React, { useContext } from "react";
import { MyContext } from "../../../context/context";
import "./movie.css";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Button from "@material-ui/core/Button";

/**
 * 1.[ok] Exibir o título do filme
 * 2.[ok] Exibir preço do filme
 * 3.[ok] Exibir imagem do filme
 * 3.[ok] "Ver detalhes detalhes do filme"
 * 4.[ok] "Adicionar ao carrinho"
 */
export default function CardMovie({ item, navigate }) {
  const { addItemToCart } = useContext(MyContext);

  const irParaDetalharFilme = () => {
    navigate(item.id);
  };

  const onClickAdicionarAoCarrinho = () => {
    addItemToCart(item);
  };

  return (
    <div className="movieRow">
      <div className="cardBox">
        <div>
          <img
            onClick={irParaDetalharFilme}
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt={""}
          />
        </div>

        <div className="card-body">
          <div className="card-title" onClick={irParaDetalharFilme}>
            <h6>{item.original_name}</h6>
            <h4>{item.title}</h4>
          </div>
        </div>
        <div>
          <CardActions
            disableSpacing
            style={{ height: "80%", marginTop: "-55%", width: "98%" }}
          >
            <IconButton
              aria-label="detalhar filme"
              onClick={irParaDetalharFilme}
            >
              <OpenInNewIcon
                style={{
                  color: "black",
                  backgroundColor: "#2F7581",
                  height: "33px",
                }}
              />
            </IconButton>

            <Button
              size="small"
              color="secondary"
              onClick={onClickAdicionarAoCarrinho}
              style={{
                color: "#fff",
                backgroundColor: "#D3840B",
                fontWeight: "bold",
                fontSize: "17px",
                width: "90%",
              }}
            >
              R$ {(item.vote_average * 10).toFixed(2)}
            </Button>
          </CardActions>
        </div>
      </div>
    </div>
  );
}
