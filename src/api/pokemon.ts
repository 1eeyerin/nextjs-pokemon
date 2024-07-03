import type { PokemonApiResponse } from "@/types/pokemon";
import { axiosGet } from "./request";

export const getPosts = () =>
  axiosGet<PokemonApiResponse[]>({ url: "/api/pokemons" });

export const getPokemon = (id: string) =>
  axiosGet<PokemonApiResponse>({ url: `/api/pokemons/${id}` });
