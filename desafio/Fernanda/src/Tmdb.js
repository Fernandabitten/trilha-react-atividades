import axios from "axios";
/*
- lista de filmes
- recomendados (destaques)(trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
-documentários
*/

const API_Key = "69acce518380b38a8085cea57549ef7a";
const API_BASE = "https://api.themoviedb.org/3";

const basicAxios = async (endpoint) => {
  const response = await axios.get(`${API_BASE}${endpoint}`);
  return response.data;
};

const infoByCategory = {
  action: {
    id: "28",
    title: "Ação",
  },
  adventure: {
    id: "12",
    title: "Aventura",
  },
  animation: {
    id: "16",
    title: "Anime",
  },
  comedy: {
    id: "35",
    title: "Comédia",
  },
  crime: {
    id: "80",
    title: "Crime",
  },
  documentary: {
    id: "99",
    title: "Documentário",
  },
  drama: {
    id: "18",
    title: "Drama",
  },
  family: {
    id: "10751",
    title: "Para toda família",
  },
  fantasy: {
    id: "14",
    title: "Fantasia",
  },
  history: {
    id: "36",
    title: "História",
  },
  horror: {
    id: "27",
    title: "Terror",
  },
  music: {
    id: "10402",
    title: "Musicais",
  },
  mystery: {
    id: "9648",
    title: "Mistério",
  },
  romance: {
    id: "10749",
    title: "Romance",
  },
  "science fiction": {
    id: "878",
    title: "Ficção Científica",
  },
  war: {
    id: "10752",
    title: "Guerra",
  },
  western: {
    id: "37",
    title: "Faroeste",
  },
};

const Tmdb = {
  getMoviesByCategory: async (category) => {
    return {
      category: category,
      title: infoByCategory[category].title,
      items: await basicAxios(
        `/discover/movie?with_genres=${infoByCategory[category].id}&language=pt-BR&api_key=${API_Key}`
      ),
    };
  },
  getReleases: async () => {
    return {
      category: "releases",
      title: "Lançamentos",
      items: await basicAxios(
        `/movie/now_playing?api_key=${API_Key}&language=pt-BR&page=1`
      ),
    };
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    //pega as informações de um filme especifico
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicAxios(
            `/movie/${movieId}?language=pt-BR&api_key=${API_Key}`
          );
          break;
        case "tv":
          info = await basicAxios(
            `/tv/${movieId}?language=pt-BR&api_key=${API_Key}`
          );
          break;
        default:
          info = null;
      }
    }
    return info;
  },
  getMovie: async (id) => {
    const result = await axios.get(
      `${API_BASE}/movie/${id}?api_key=${API_Key}&language=pt-BR`
    );
    return result.data;
  },
  getMovieDetails: async (id) => {
    const result = await axios.get(
      `${API_BASE}/movie/${id}/credits?api_key=${API_Key}&language=pt-BR`
    );
    return result.data;
  },
  getMovieRecommendations: async (id) => {
    const result = await axios.get(
      `${API_BASE}/movie/${id}/recommendations?api_key=${API_Key}&language=pt-BR`
    );
    return result.data;
  },
};

export default Tmdb;
