"use client";

import { getPosts } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPosts,
  });

  if (isPending) return null;

  console.log("@@", data);

  return (
    <main>
      <div>하이</div>
      {data.map((pokemon: any) => {
        return (
          <div key={pokemon.id}>
            {pokemon.korean_name}
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        );
      })}
    </main>
  );
};

export default HomePage;
