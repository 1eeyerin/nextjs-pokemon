"use client";

import { getPosts } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HomePage = () => {
  const { data, isPending } = useQuery({
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
          {data.map((pokemon: any) => {
            return (
              <motion.li
                key={pokemon.id}
                className="bg-white shadow-2xl rounded-3xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/pokemons/${pokemon.id}`}
                  className="flex flex-col items-center justify-center gap-4  p-6"
                >
                  <motion.strong
                    className="text-2xl font-bold text-gray-900"
                    whileHover={{ color: "#4F46E5" }}
                  >
                    {pokemon.korean_name}
                  </motion.strong>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={pokemon.sprites.front_default}
                      alt={pokemon.korean_name}
                      width={100}
                      height={100}
                      className="rounded-full shadow-2xl border border-gray-100 p-2 transition-transform duration-500"
                    />
                  </motion.div>
                  <span className="text-gray-700">도감번호: {pokemon.id}</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </main>
  );
};

export default HomePage;
