import { axiosGet } from "./request";

export const getPosts = () => axiosGet({ url: "/api/pokemons" });
