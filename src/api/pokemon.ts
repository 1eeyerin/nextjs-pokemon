import { axiosGet } from "./request";

export const getPosts = () => axiosGet({ url: "/api/pokemons" });

export const getPokemon = (id: string) =>
  axiosGet({ url: `/api/pokemons/${id}` });
