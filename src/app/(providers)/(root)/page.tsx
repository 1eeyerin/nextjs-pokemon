"use client";

import { getPosts } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPosts,
  });

  if (isPending) return null;

  return (
    <main>
      <h1 className="mb-4 text-center text-2xl font-bold">포켓몬 도감</h1>
      <ul className="grid grid-cols-4 gap-4">
        {data.map((pokemon: any) => {
          return (
            <li key={pokemon.id}>
              <Link
                href={`/detail/${pokemon.id}`}
                className="flex flex-col items-center justify-center gap-2 rounded-md border p-4 shadow-md"
              >
                <strong>{pokemon.korean_name}</strong>
                <Image
                  src={pokemon.sprites.front_default}
                  alt=""
                  width={100}
                  height={100}
                />
                <span>도감번호: {pokemon.id}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
