import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const itemCardStyles = cva(
  "bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center gap-4 p-6",
  {
    variants: {
      hover: {
        true: "hover:scale-110 hover:rotate-5",
      },
      tap: {
        true: "active:scale-95",
      },
    },
    defaultVariants: {
      hover: true,
      tap: true,
    },
  }
);

const ItemCard = ({ pokemon, tag = "li" }: { pokemon: any; tag?: string }) => {
  const Comp = motion[tag as keyof typeof motion];

  return (
    <Comp
      key={pokemon.id}
      className={itemCardStyles()}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={`/pokemons/${pokemon.id}`}
        className="flex flex-col items-center justify-center gap-4 p-6"
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
    </Comp>
  );
};

export default ItemCard;
