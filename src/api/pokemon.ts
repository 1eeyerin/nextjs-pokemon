import type {
  PokemonDetailResponse,
  PokemonListResponse,
} from "@/types/pokemon";
import { axiosGet } from "./request";

export const getPokemons = ({ page = 1 }) =>
  axiosGet<PokemonListResponse>({ url: `/api/pokemons?page=${page}` });

export const getPokemon = (id: string) =>
  axiosGet<PokemonDetailResponse>({ url: `/api/pokemons/${id}` });
