import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Tmdb from "../../Tmdb";
import Layout from "../../componentes/Layoute/Layout";
import {
  MovieDetailsStayled,
  BoxActorCarouselStyled,
  BoxMoviesCarouselStyled,
} from "./MovieDetailsPage.styled";
import CardMovieDetails from "../../componentes/Cards/CardMovieDetails/CardMovieDetails";
import ActorCarousel from "../../componentes/Carousel/ActorCarousel/ActorCarousel";
import MoviesCarousel from "../../componentes/Carousel/MoviesCarousel/MoviesCarousel";
import loading from "../../img/loading.gif";

/*
[Ok] nome do filme;
[ok] recomendações para aquele filme;
[ok] elenco; 
[ok] gêneros;
[ok] ano de lançamento; 
[ok] tempo do filme;
[ok] botão para adicionar ao carrinho. 
*/

export default function DetalharFilme() {
  const [item, setItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [recommendations, setRecommendations] = useState({
    category: "",
    title: "",
    results: [],
  });

  const params = useParams();

  useEffect(() => {
    const details = async () => {
      setItem(await Tmdb.getMovie(params.id));
    };

    const detailsElenc = async () => {
      setItemDetails(await Tmdb.getMovieDetails(params.id));
    };

    const detailsRecoemmend = async () => {
      setRecommendations(await Tmdb.getMovieRecommendations(params.id));
    };

    details();
    detailsElenc();
    detailsRecoemmend();
  }, [params.id]);

  if (item === null || itemDetails === null) {
    return (
      <div style={{ backgroundColor: "black", width: "100%", height: "600px" }}>
        <img src={loading} alt="" style={{ width: "25%", marginLeft: "40%" }} />
      </div>
    );
  }

  return (
    <Layout>
      <MovieDetailsStayled>
        <CardMovieDetails
          item={item}
          setItem={setItem}
          itemDetails={itemDetails}
        />

        <BoxActorCarouselStyled>
          <h2>Elenco</h2>
          <ActorCarousel item={item} itemDetails={itemDetails} />
        </BoxActorCarouselStyled>

        <BoxMoviesCarouselStyled>
          <MoviesCarousel title="Filmes Recomendados" items={recommendations} />
        </BoxMoviesCarouselStyled>
      </MovieDetailsStayled>
    </Layout>
  );
}
