import { getPokemons } from "@/api/pokemon";
import type { PokemonListResponse } from "@/types/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useQueryPokemon = () => {
  return useInfiniteQuery<
    PokemonListResponse,
    Error,
    PokemonListResponse["data"],
    string[],
    number
  >({
    queryKey: ["pokemons"],
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPage = lastPageParam + 1;
      return lastPage.hasNextPage ? nextPage : undefined;
    },
    queryFn: ({ pageParam: page }) => getPokemons({ page }),
    select: (data) => data.pages.flatMap(({ data }) => data),
  });
};
