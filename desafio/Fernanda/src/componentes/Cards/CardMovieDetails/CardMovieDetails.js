import React, { useContext } from "react";
import { MyContext } from "../../../context/context";
import loading from "../../../img/loading.gif";
import "./cardMovieDetails.css";
import Button from "@material-ui/core/Button";

export default function CardMovieDetails({ item, itemDetails }) {
  const { addItemToCart } = useContext(MyContext);

  const onClickAdicionarAoCarrinho = () => {
    addItemToCart(item);
  };

  if (item === null || itemDetails === null) {
    return (
      <div style={{ backgroundColor: "black", width: "100%", height: "600px" }}>
        <img src={loading} alt="" style={{ width: "25%", marginLeft: "40%" }} />
      </div>
    );
  }

  const convertMovieRuntime = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `00${horas}`.slice(-1);
    const textoMinutos = `00${min}`.slice(-2);
    return `${textoHoras}h:${textoMinutos}min`;
  };

  const movieRuntime = convertMovieRuntime(item.runtime);

  const releaseYear = new Date(item.release_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="verticalColumn">
        <div className="horizontalColumn">
          <br />
          <div className="title">{item.title}</div>

          <div className="info">
            {movieRuntime} {releaseYear.getFullYear()}
            <div>{genres.join(", ")}</div>
          </div>

          <Button
            onClick={onClickAdicionarAoCarrinho}
            style={{
              color: "#fff",
              backgroundColor: "#D3840B",
              fontSize: "20px",
              fontWeight: "bold",
              width: "200px",
              marginTop: "15px",
              marginRight: "15px",
              padding: "15p 25px",
            }}
          >
            <spam>R$ {(item.vote_average * 10).toFixed(2)}</spam>
          </Button>
          <div className="description">{item.overview}</div>
        </div>
      </div>
    </div>
  );
}
