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
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10 flex justify-center">
      <div className="max-w-screen-xl w-full">
        <h1 className="mb-8 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 drop-shadow-lg">
          📚 포켓몬 도감
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {data.map((pokemon: any) => {
            return (
              <li
                key={pokemon.id}
                className="bg-white shadow-2xl rounded-3xl p-6"
              >
                <Link
                  href={`/pokemons/${pokemon.id}`}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <strong className="text-xl font-bold text-gray-900">
                    {pokemon.korean_name}
                  </strong>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.korean_name}
                    width={100}
                    height={100}
                    className="rounded-full shadow-2xl border border-gray-100 p-2 transition-transform duration-500 hover:scale-110"
                  />
                  <span className="text-gray-700">도감번호: {pokemon.id}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default HomePage;
