import axios from "axios";

//https://api.themoviedb.org/3/movie/550?api_key=9dc697192187cb4ec3b67a62879d5544

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
