import { REACT_API_KEY } from "@env";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${REACT_API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${REACT_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
  fetchTopRated: `/movie/top_rated?api_key=${REACT_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=99`,
};

export default requests;
