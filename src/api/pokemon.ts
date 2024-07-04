import type { PokemonApiResponse } from "@/types/pokemon";
import { axiosGet } from "./request";

export const getPokemons = () =>
  axiosGet<PokemonApiResponse[]>({ url: "/api/pokemons" });

export const getPokemon = (id: string) =>
  axiosGet<PokemonApiResponse<true>>({ url: `/api/pokemons/${id}` });
