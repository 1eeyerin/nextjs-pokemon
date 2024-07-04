"use client";

import { motion } from "framer-motion";
import { useQueryPokemon } from "@/queries/useQueryPokemon";
import { useInView } from "react-intersection-observer";
import ItemCard from "../ItemCard";

const ItemList = () => {
  const {
    data = [],
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useQueryPokemon();

  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (!(inView && hasNextPage && !isFetchingNextPage)) return;
      fetchNextPage();
    },
  });

  if (isPending) return null;

  return (
    <motion.ul
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {data.map((pokemon) => {
        return <ItemCard key={pokemon.id} pokemon={pokemon} />;
      })}
      <div ref={ref} />
    </motion.ul>
  );
};

export default ItemList;
