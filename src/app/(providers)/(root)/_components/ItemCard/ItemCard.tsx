import { motion } from "framer-motion";
import type { PokemonApiResponse } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import Chip from "@/components/Chip";

type ItemCardProps = {
  pokemon: PokemonApiResponse;
  tag?: keyof typeof motion;
};

const ItemCard = ({ pokemon, tag = "li" }: ItemCardProps) => {
  const Comp = motion[tag];

  return (
    <Comp
      key={pokemon.id}
      className="bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center gap-4 p-6 relative"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={`/pokemons/${pokemon.id}`}
        className="flex flex-col items-center justify-center gap-4 p-6 pb-20"
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
            alt={pokemon.korean_name || ""}
            width={100}
            height={100}
            className="rounded-full shadow-2xl border border-gray-100 p-2 transition-transform duration-500"
          />
        </motion.div>
        <div className="absolute bottom-4 right-4">
          <Chip>No. {pokemon.id}</Chip>
        </div>
      </Link>
    </Comp>
  );
};

export default ItemCard;
