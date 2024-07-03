"use client";

import { getPosts } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ItemCard from "./_components/ItemCard";
import type { PokemonApiResponse } from "@/types/pokemon";

const HomePage = () => {
  const { data = [], isPending } = useQuery<PokemonApiResponse[]>({
    queryKey: ["pokemons"],
    queryFn: getPosts,
  });

  if (isPending) return null;

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10 flex justify-center">
      <div className="max-w-screen-xl w-full">
        <motion.h1
          className="mb-8 text-3xl font-extrabold"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📚 포켓몬 도감
        </motion.h1>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {data.map((pokemon) => {
            return <ItemCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </motion.ul>
      </div>
    </main>
  );
};

export default HomePage;
